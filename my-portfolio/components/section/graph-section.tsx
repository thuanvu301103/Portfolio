"use client";

import React, { useCallback, useEffect, useState, useRef } from "react"; // Added useRef
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { NodeObject, ForceGraphMethods } from "react-force-graph-2d"; // Added ForceGraphMethods type

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface ArticleNode extends NodeObject {
  id: string;
  title: string;
  url: string;
  size: number;
  group: number;
}

export default function ArticleGraph() {
  const router = useRouter();
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

  const data = {
    nodes: [
      { id: "1", title: "Golang", size: 6, url: "", group: 1 },
      {
        id: "1.1",
        title: "Golang Runtime",
        size: 2,
        url: "https://medium.com/@vungocthuan1234/list/golang-runtime-8ee40ca93176",
        group: 1,
      },
      { id: "2", title: "SQL", size: 6, url: "", group: 2 },
      {
        id: "2.1",
        title: "SQL Query Plan",
        size: 2,
        url: "https://medium.com/@vungocthuan1234/sql-explain-command-query-plan-fc90654d5f15",
        group: 2,
      },
    ],
    links: [
      { source: "1", target: "1.1" },
      { source: "2", target: "2.1" },
    ],
  };

  const paintNode = useCallback(
    (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const n = node as ArticleNode;
      if (n.x === undefined || n.y === undefined) return;

      const label = n.title;
      const fontSize = 14 / globalScale;
      const radius = n.size || 2;

      // Draw Node
      ctx.beginPath();
      ctx.arc(n.x, n.y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle =
        n.group === 1 ? "#3b82f6" : n.group === 2 ? "#10b981" : "#f59e0b";
      ctx.fill();

      // Draw Label
      ctx.font = `500 ${fontSize}px "JetBrains Mono", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = theme.fg;
      ctx.fillText(label, n.x, n.y + radius + 8 / globalScale); // English comment: Adjust label position based on radius
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

      <div
        ref={containerRef}
        className="relative w-full h-[650px] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-xl transition-colors duration-300"
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

        <ForceGraph2D
          ref={fgRef as any} // 4. Assign the ref
          graphData={data}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor={theme.bg}
          nodeLabel="title"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          linkColor={() =>
            theme.fg === "#ffffff" || theme.fg === "#ededed"
              ? "#334155"
              : "#cbd5e1"
          }
          onNodeClick={(node) => {
            const n = node as ArticleNode;
            if (n.url) {
              window.open(n.url, "_blank", "noopener,noreferrer");
            }
          }}
          nodeCanvasObject={paintNode}
          nodeCanvasObjectMode={() => "replace"}
          nodeVal={(node) => (node as ArticleNode).size} // English comment: Ensure physics engine respects node size
        />
      </div>
    </div>
  );
}
