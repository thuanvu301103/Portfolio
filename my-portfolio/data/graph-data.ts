export const graphData = {
  nodes: [
    {
      id: "1",
      title: "Programming Language",
      description: ``,
      size: 8,
      url: "",
      group: 1,
    },
    {
      id: "1.1",
      title: "Golang",
      description: `Golang (Go) is designed for simplicity, high performance, and efficient concurrency. 
              It features fast compilation, a powerful standard library, and lightweight goroutines`,
      size: 6,
      url: "",
      group: 1,
    },
    {
      id: "1.1.1",
      title: "Golang Runtime",
      description: `A core engine responsible for managing program execution, 
        handling Goroutine scheduling (concurrency), automatic memory management (Garbage Collection), 
        and optimizing resource allocation across multi-core processors.`,
      size: 2,
      url: "https://medium.com/@vungocthuan1234/list/golang-runtime-8ee40ca93176",
      group: 1,
    },
    {
      id: "1.1.2",
      title: "Golang TypeSystem",
      description: `An in-depth exploration of Go's type system, 
        focusing on how Structs and Interfaces implement OOP principles like Encapsulation and Polymorphism 
        through composition rather than inheritance.`,
      size: 2,
      url: "https://medium.com/@vungocthuan1234/go-type-system-struct-and-interface-an-oop-approach-11c403fd32f8",
      group: 1,
    },
    {
      id: "1.2",
      title: "JavaScript",
      description: `JavaScript is a high-level programming language mainly used to create interactive 
        and dynamic content on websites, such as animations, forms, and real-time updates.`,
      size: 6,
      url: "",
      group: 1,
    },
    {
      id: "1.2.1",
      title: "Asynchronous Syntax",
      description: `Asynchronous syntax in JavaScript allows code to handle long - running tasks 
        without blocking the main execution thread. It enables programs to stay responsive 
        by executing tasks in the background and handling results later, 
        commonly using callbacks, Promises, and async/await for cleaner and more manageable code.`,
      size: 2,
      url: "https://drive.google.com/file/d/1cHV-HwDhUeBQkXyKWQSaD3UFNvheBLP_/view?usp=sharing",
      group: 1,
    },
    {
      id: "1.2.2",
      title: "NodeJS Runtime",
      description: `Node.js Runtime is a server-side JavaScript runtime built on Google's V8 engine 
        that allows JavaScript to run outside the browser. It is designed for building fast, scalable, 
        and efficient network applications using a non-blocking, event-driven architecture.`,
      size: 2,
      url: "https://drive.google.com/file/d/1XyeaZ7u154YW41N763FWdUwqfJNO2mvh/view?usp=drive_link",
      group: 1,
    },
    {
      id: "1.2.3",
      title: "ReactJS",
      description: `ReactJS is a JavaScript library used to build fast and interactive user interfaces by creating reusable, 
        component-based UI elements.`,
      size: 4,
      url: "",
      group: 1,
    },
    {
      id: "1.2.3.1",
      title: "Core Concept",
      description: `How the Virtual DOM enables efficient UI updates, how JSX combines UI and logic, 
        and how props and state manage data. It also introduces components, lifecycle concepts, 
        and Hooks as the foundation of modern React development.`,
      size: 2,
      url: "https://drive.google.com/file/d/1diP6xFzdOYrH57NkYte86ETPRtm4e85E/view?usp=sharing",
      group: 1,
    },
    {
      id: "1.2.3.2",
      title: "Hooks & State Management",
      description: `Hooks like useState and useEffect allow components to store state and handle 
        side effects without using classes. State management controls how data changes over time 
        and triggers UI updates, making applications predictable, interactive, and easier to maintain`,
      size: 2,
      url: "https://drive.google.com/file/d/1shehnZNo19Ivog8mWMZ1TLyVv6rWSeSE/view?usp=sharing",
      group: 1,
    },
    {
      id: "1.3",
      title: "TypeScript",
      description: `TypeScript is a superset of JavaScript that adds static typing, helping developers catch errors early 
        and build more reliable, maintainable applications—especially for large-scale projects.`,
      size: 6,
      url: "",
      group: 1,
    },
    {
      id: "1.3.1",
      title: "Type Programming",
      description: `Using TypeScript's advanced type system (such as generics, conditional types, and type inference) 
        to model logic at the type level, improving code safety, expressiveness, and maintainability 
        without affecting runtime behavior.`,
      size: 2,
      url: "https://drive.google.com/file/d/1REPBvcWH6Rz2-dV078QiZf9An8Xdqtzl/view?usp=sharing",
      group: 1,
    },
    {
      id: "1.3.2",
      title: "Transpilation",
      description: `Process of converting TypeScript code into plain JavaScript, 
        allowing it to run in browsers or JavaScript runtimes while preserving compatibility and 
        adding type safety during development`,
      size: 2,
      url: "https://drive.google.com/file/d/1QsXmS8_vYOolJZoh_de2Qz4oLyKqMxzQ/view?usp=sharing",
      group: 1,
    },
    {
      id: "2",
      title: "SQL",
      description:
        "Standard programming language designed for managing and manipulating data within relational databases",
      size: 6,
      url: "",
      group: 2,
    },
    {
      id: "2.1",
      title: "SQL Query Plan",
      description: `An SQL Query Plan is an execution roadmap generated by the database optimizer 
        to determine the most efficient way to access data, detailing steps like index scans, 
        joins, and filters to minimize resource consumption`,
      size: 2,
      url: "https://medium.com/@vungocthuan1234/sql-explain-command-query-plan-fc90654d5f15",
      group: 2,
    },
    {
      id: "3",
      title: "Linux Fundamentals",
      description: `Introduces the essential concepts of the Linux operating system. 
          Learners will explore core commands, file management, and system administration basics`,
      size: 6,
      url: "https://drive.google.com/drive/folders/11SM_v5r_LB32-qiFGjE6addrHv_xIfLz?usp=sharing",
      group: 3,
    },
    {
      id: "4",
      title: "Genkit",
      description: `Genkit is an open‑source AI development framework built and used in production by Google. 
      Genkit supports building everything from chatbots to agentic workflows to multimodal applications, using consistent APIs. `,
      size: 6,
      url: "https://genkit.dev/docs/go/overview/",
      group: 4,
    },
    {
      id: "4.1",
      title: "Defining AI workflows",
      description: `AI workflows typically require more than just a model call. 
      They need pre- and post-processing steps like retrieving context, managing session history, 
      reformatting inputs, validating outputs, or combining multiple model responses.`,
      size: 2,
      url: "",
      group: 4,
    },
    {
      id: "4.2",
      title: "Tool Calling",
      description: `Tool calling, also known as function calling, is a structured way to give LLMs the ability 
      to make requests back to the application that called it`,
      size: 2,
      url: "",
      group: 4,
    },
    {
      id: "4.3",
      title: "Agentic Patterns",
      description: `Building powerful AI systems involves more than just calling a model; 
      it requires structuring interactions in a way that balances reliability with flexibility. 
      This is the core idea behind the agentic scale`,
      size: 2,
      url: "",
      group: 4,
    },
    {
      id: "4.4",
      title: "Managing prompts",
      description: `Prompt engineering is the primary way that you, as an app developer, 
      influence the output of generative AI models`,
      size: 2,
      url: "",
      group: 4,
    },
    {
      id: "4.5",
      title: "Persistent chat sessions",
      description: `A session encapsulates a stateful execution environment with strongly-typed state 
      that can be persisted across requests. Sessions are useful for maintaining user preferences, 
      conversation context, or any application state that needs to survive between interactions`,
      size: 2,
      url: "",
      group: 4,
    },
    {
      id: "5",
      title: "Google Cloud Platform - GCP",
      description: `GCP (Google Cloud Platform) is Google's cloud computing platform that 
      provides tools and services for building, deploying, and scaling applications on Google's 
      global infrastructure`,
      size: 6,
      url: "",
      group: 3,
    },
    {
      id: "5.1",
      title: "Core Infrastructure",
      description: `The Foundation of GCP`,
      size: 4,
      url: "",
      group: 3,
    },
    {
      id: "5.1.1",
      title: "Identity & Access Management (IAM)",
      description: `IAM is a tool to manage fine-grained authorization for Google Cloud. 
      In other words, it lets you control who can do what on which resources.`,
      size: 2,
      url: "https://docs.cloud.google.com/iam/docs/overview",
      group: 3,
    },
    {
      id: "5.1.2",
      title: "Cloud Run",
      description: `Cloud Run is a fully managed application platform for running your code, 
      function, or container on top of Google's highly scalable infrastructure.`,
      size: 2,
      url: "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run",
      group: 3,
    },
    {
      id: "5.1.3",
      title: "Compute Engine",
      description: `Compute Engine is an infrastructure as a service (IaaS) 
      product that offers self-managed virtual machine (VM) instances and bare metal instances`,
      size: 2,
      url: "https://docs.cloud.google.com/compute/docs/overview",
      group: 3,
    },
    {
      id: "6",
      title: "Git",
      description: `Git Fundamental`,
      size: 6,
      url: "",
      group: 3,
    },
    {
      id: "6.1",
      title: "Snapshot & Version Control",
      description: `Git records the state of a project as snapshots at each commit, 
        capturing the full file structure at a specific point in time. This snapshot‑based version control 
        allows developers to track changes, collaborate safely, and restore any previous version efficiently`,
      size: 2,
      url: "https://drive.google.com/file/d/1DSdm1sw-BRYkNFAZGK-0q81uCPNAsuHK/view?usp=sharing",
      group: 3,
    },
    {
      id: "6.2",
      title: "Basic Commands",
      description: `Setup Repository (Indentity - config, Initialization - init), 
        Workflow Loop (Working Tree - status, Index - add, Snapshot - commit), Viewing History (log),
        Undoing Mistakes (checkout, reset)`,
      size: 2,
      url: "https://drive.google.com/file/d/1qqBGpD4h52xrZ1IRCE65fQo7vNJgN9lU/view?usp=sharing",
      group: 3,
    },
    {
      id: "6.3",
      title: "Branching & Merging",
      description: `Concept of Branching Pointer-based, Create new Branches, Switch between Branches
        Merging Branches, Dealing with Merge Conflicts`,
      size: 2,
      url: "https://drive.google.com/file/d/1BUt_aHFUTGvBa54jAwPdwtegh5vr0-pq/view?usp=sharing",
      group: 3,
    },
    {
      id: "6.4",
      title: "Remote Collaboration",
      description: `Add new Remote, Push & Pull, Cloning`,
      size: 2,
      url: "https://drive.google.com/file/d/1i0Tk8S3FJpLq51NnmeEiTa65-CGClx_R/view?usp=sharing",
      group: 3,
    },
  ],
  links: [
    { source: "1", target: "1.1" },
    { source: "1", target: "1.2" },
    { source: "1", target: "1.3" },
    { source: "1.1", target: "1.1.1" },
    { source: "1.1", target: "1.1.2" },
    { source: "1.2", target: "1.2.1" },
    { source: "1.2", target: "1.2.2" },
    { source: "1.2", target: "1.2.3" },
    { source: "1.2", target: "1.3" },
    { source: "1.2.3", target: "1.2.3.1" },
    { source: "1.2.3", target: "1.2.3.2" },
    { source: "1.3", target: "1.3.1" },
    { source: "1.3", target: "1.3.2" },
    { source: "2", target: "2.1" },
    { source: "4", target: "4.1" },
    { source: "4", target: "4.2" },
    { source: "4", target: "4.3" },
    { source: "4", target: "4.4" },
    { source: "4", target: "4.5" },
    { source: "5", target: "5.1" },
    { source: "5.1", target: "5.1.1" },
    { source: "5.1", target: "5.1.2" },
    { source: "5.1", target: "5.1.3" },
    { source: "6", target: "6.1" },
    { source: "6", target: "6.2" },
    { source: "6", target: "6.3" },
    { source: "6", target: "6.4" },
  ],
};

export const getNodeColor = (group: number): string => {
  const colors: Record<number, string> = {
    1: "#00BCD4",
    2: "#8BC34A",
    3: "#FFA000",
    4: "#E91E63",
  };

  return colors[group] || "#E0E0E0";
};
