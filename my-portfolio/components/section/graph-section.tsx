"use client";

import { useCallback, useEffect, useState, useRef, useMemo } from "react"; // Added useRef
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { NodeObject, ForceGraphMethods } from "react-force-graph-2d"; // Added ForceGraphMethods type
import { getNodeColor, graphData } from "@/data/graph-data";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface ArticleNode extends NodeObject {
  id: string;
  title: string;
  description: string;
  url: string;
  size: number;
  group: number;
}

export default function ArticleGraph() {
  const router = useRouter();
  const data = graphData;
  const [theme, setTheme] = useState({ bg: "#ffffff", fg: "#09090b" });

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 650 });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDimensions({ width, height });

        if (fgRef.current) {
          fgRef.current.zoomToFit(400, 80);
        }
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 1. Create a ref for the graph
  const fgRef = useRef<ForceGraphMethods<any, any> | null>(null);

  const getInitialCollapsedNodes = useCallback(
    (maxLevel: number) => {
      const levels: Record<string, number> = {};
      const collapsed = new Set<string>();

      // 1. Tìm tất cả các node có "cha" (là target của một link nào đó)
      const nodesWithParents = new Set();
      data.links.forEach((link) => {
        const targetId = (link.target as any).id || link.target;
        nodesWithParents.add(targetId);
      });

      // 2. Những node KHÔNG có cha sẽ được coi là Root (Level 0)
      data.nodes.forEach((node) => {
        if (!nodesWithParents.has(node.id)) {
          levels[node.id] = 0;
        }
      });

      // 3. Tính toán độ sâu cho TẤT CẢ các nhánh (BFS)
      let changed = true;
      let safetyNet = 0; // Tránh vòng lặp vô tận nếu có link vòng tròn
      while (changed && safetyNet < 100) {
        changed = false;
        safetyNet++;
        data.links.forEach((link) => {
          const sourceId = (link.source as any).id || link.source;
          const targetId = (link.target as any).id || link.target;

          if (
            levels[sourceId] !== undefined &&
            levels[targetId] === undefined
          ) {
            levels[targetId] = levels[sourceId] + 1;
            changed = true;
          }
        });
      }

      // 4. Áp dụng đóng node tại level chỉ định
      data.nodes.forEach((node) => {
        const level = levels[node.id];
        if (level === maxLevel) {
          const hasChildren = data.links.some(
            (l) => ((l.source as any).id || l.source) === node.id,
          );
          if (hasChildren) {
            collapsed.add(node.id);
          }
        }
      });

      return collapsed;
    },
    [data],
  );

  // State to store IDs of nodes that are collapsed / hidden
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(() =>
    getInitialCollapsedNodes(1),
  );

  const toggleNode = useCallback(
    (nodeId: string) => {
      const newCollapsedNodes = new Set(collapsedNodes);
      if (newCollapsedNodes.has(nodeId)) {
        newCollapsedNodes.delete(nodeId);
      } else {
        newCollapsedNodes.add(nodeId);
      }
      setCollapsedNodes(newCollapsedNodes);
    },
    [collapsedNodes],
  );

  const visibleData = useMemo(() => {
    // 1. Find all nodes that should be hidden
    const hiddenIds = new Set<string>();

    const addChildrenToHidden = (parentId: string) => {
      data.links
        .filter(
          (link) =>
            (link.source as any).id === parentId || link.source === parentId,
        )
        .forEach((link) => {
          const childId = (link.target as any).id || link.target;
          hiddenIds.add(childId);
          addChildrenToHidden(childId); // Recursive to hide nested children
        });
    };

    collapsedNodes.forEach((id) => addChildrenToHidden(id));

    // 2. Filter the graph data
    return {
      nodes: data.nodes.filter((n) => !hiddenIds.has(n.id)),
      links: data.links.filter((l) => {
        const sourceId = (l.source as any).id || l.source;
        const targetId = (l.target as any).id || l.target;
        return !hiddenIds.has(sourceId) && !hiddenIds.has(targetId);
      }),
    };
  }, [collapsedNodes]);

  useEffect(() => {
    const getThemeColors = () => {
      const rootStyle = getComputedStyle(document.documentElement);
      const bg = rootStyle.getPropertyValue("--background").trim() || "#ffffff";
      const fg = rootStyle.getPropertyValue("--foreground").trim() || "#09090b";
      setTheme({ bg, fg });
    };

    getThemeColors();

    const observer = new MutationObserver(getThemeColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 2. Function to center the graph
  const handleCenter = useCallback(() => {
    if (fgRef.current) {
      fgRef.current.centerAt(0, 0, 400);
      fgRef.current.zoomToFit(600, 80);
    }
  }, []);

  const paintNode = useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const n = node as ArticleNode;
      if (n.x === undefined || n.y === undefined) return;

      const label = n.title;
      const fontSize = 14 / globalScale;
      const radius = n.size || 2;
      const hasUrl = !!n.url; // Check if node has a clickable URL
      const nodeColor = getNodeColor(n.group);

      const isCollapsed = collapsedNodes.has(n.id);
      const hasChildren = data.links.some(
        (l) => (l.source as any).id === n.id || l.source === n.id,
      );

      if (hasChildren) {
        ctx.save(); // Save current canvas state
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius + 5 / globalScale, 0, 2 * Math.PI);

        ctx.setLineDash([5 / globalScale, 5 / globalScale]);
        ctx.lineWidth = 1 / globalScale; // Thinner line
        ctx.strokeStyle = `${nodeColor}aa`; // More opaque color for expanded state

        ctx.stroke();
        ctx.restore(); // Restore canvas state to reset lineDash
      }

      // 1. Draw Outer Ring for clickable nodes
      if (hasUrl) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius + 2 / globalScale, 0, 2 * Math.PI, false);
        ctx.strokeStyle = nodeColor;
        ctx.lineWidth = 1 / globalScale;
        ctx.stroke();
      }

      // 2. Draw Main Node Body
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      // 3. Draw Label
      ctx.font = `500 ${fontSize}px "JetBrains Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = theme.fg;

      ctx.fillText(label, n.x, n.y + radius + 8 / globalScale);
    },
    [theme.fg],
  );

  // English comment: Auto-center on initial mount and when window resizes
  useEffect(() => {
    const timer = setTimeout(() => {
      handleCenter();
    }, 800); // English comment: Delay to ensure DOM is fully painted

    window.addEventListener("resize", handleCenter);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleCenter);
    };
  }, [handleCenter]);

  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNodeClick = useCallback(
    (node: any) => {
      const n = node as ArticleNode;

      // 1. If there's a second click within the delay, this logic is skipped because of the clear
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;

        // 2. Logic for DOUBLE CLICK: Open URL
        if (n.url) {
          window.open(n.url, "_blank", "noopener,noreferrer");
        }
        return;
      }

      // 3. Set a timeout for SINGLE CLICK: Toggle Expand/Collapse
      clickTimeoutRef.current = setTimeout(() => {
        const hasChildren = data.links.some(
          (l) => (l.source as any).id === n.id || l.source === n.id,
        );

        if (hasChildren) {
          toggleNode(n.id);
        }

        clickTimeoutRef.current = null;
      }, 300); // 300ms is the standard threshold for double-click
    },
    [data.links, toggleNode],
  );

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 border-r-4 border-emerald-500 pr-6 text-right ml-auto max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-2 uppercase">
            Knowledge{" "}
            <span className="text-emerald-500 not-italic">Archive.</span>
          </h2>
          <div className="flex flex-col md:flex-row-reverse md:items-center gap-2 md:gap-4">
            <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-[0.2em]">
              Articles & Technical Research
            </p>
            <span className="hidden md:block text-zinc-300 dark:text-zinc-700">
              |
            </span>
            <p className="text-[10px] md:text-xs text-emerald-500 dark:text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded w-fit ml-auto md:ml-0">
              Interactive Graph System
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mx-8">
        <div
          ref={containerRef}
          className="relative h-[650px] w-full border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-xl transition-colors duration-300"
        >
          {/* 3. The Control Button */}
          <button
            onClick={handleCenter}
            className="absolute top-4 right-4 z-50 p-2 bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
            title="Center Graph"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>

          {/* 4. The Legend Indicator */}
          <div className="absolute bottom-6 left-6 z-50 p-4 bg-white/90 dark:bg-zinc-900/95 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg backdrop-blur-md pointer-events-none select-none max-w-[200px]">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Graph Legend
            </h4>
            <div className="space-y-3">
              {/* Dashed Line Legend */}
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-6 h-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="absolute w-6 h-6 rounded-full border-2 border-dashed border-emerald-500/50" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-700 dark:text-zinc-200 leading-none">
                    Dashed Ring
                  </p>
                  <p className="text-[9px] text-zinc-500 dark:text-zinc-400">
                    Expandable Topic
                  </p>
                </div>
              </div>

              {/* Solid Ring Legend */}
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-6 h-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <div className="absolute w-5 h-5 rounded-full border border-blue-500" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-700 dark:text-zinc-200 leading-none">
                    Solid Ring
                  </p>
                  <p className="text-[9px] text-zinc-500 dark:text-zinc-400">
                    Article Link (Double-click)
                  </p>
                </div>
              </div>

              {/* Simple Node */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-700 dark:text-zinc-200 leading-none">
                    Plain Node
                  </p>
                  <p className="text-[9px] text-zinc-500 dark:text-zinc-400">
                    Final Sub-topic
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ForceGraph2D
            ref={fgRef as any} // 4. Assign the ref
            graphData={visibleData}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor={theme.bg}
            nodeLabel={(node) => {
              const n = node as ArticleNode;
              const clickHint = n.url
                ? `<br/><span style="color: #10b981; font-size: 10px;">➔ Double Click to read more</span>`
                : "";

              return `
      <div style="
        background: ${theme.bg === "#ffffff" ? "rgba(255,255,255,0.9)" : "rgba(9,9,11,0.9)"};
        color: ${theme.fg};
        padding: 8px 12px;
        border: 1px solid #3f3f46;
        border-radius: 6px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 12px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      ">
        <strong style="display: block; margin-bottom: 2px;">${n.title}</strong>
        <span style="opacity: 0.7;">${n.description}</span>
        ${clickHint}
      </div>
    `;
            }}
            linkDirectionalParticles={2}
            linkDirectionalParticleSpeed={0.005}
            linkColor={() =>
              theme.fg === "#ffffff" || theme.fg === "#ededed"
                ? "#334155"
                : "#cbd5e1"
            }
            onNodeClick={handleNodeClick}
            nodeCanvasObject={paintNode}
            nodeCanvasObjectMode={() => "replace"}
            nodeVal={(node) => (node as ArticleNode).size} // English comment: Ensure physics engine respects node size
          />
        </div>
      </div>
    </div>
  );
}
