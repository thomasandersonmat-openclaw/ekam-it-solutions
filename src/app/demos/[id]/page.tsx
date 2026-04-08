"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export function generateStaticParams() {
  return [
    { id: 'market-sentinel' },
    { id: 'ai-influencer' },
    { id: 'sdlc-orchestrator' },
  ];
}

const quickStartSteps = [
  { id: "01", icon: "🔒", title: "Secure Login", desc: "Navigate to the demo link and click the Login button located in the navigation menu to enter your credentials securely." },
  { id: "02", icon: "⚙️", title: "Setup Workspace", desc: "Go to the Integration page. Here, you can easily add new Users, assign Team Members, and configure your active Sprint." },
  { id: "03", icon: "💬", title: "Connect to Context", desc: "Open the Chat Interface. Use the dropdown menus to select specific Azure Projects and Repositories, grounding the AI directly in your codebase." },
  { id: "04", icon: "📋", title: "View Work Items", desc: "Check the Work Items panel. High-level requirements are displayed here as actionable, trackable cards broken down by the Project Manager Agent." },
  { id: "05", icon: "▶️", title: "Trigger AI Agents", desc: "Click the Execute button on any work item. This launches the autonomous multi-agent pipeline to plan and write code for that specific task." },
  { id: "06", icon: "💻", title: "Monitor Progress", desc: "Open the Agent Terminal to watch the agents in action. You will see their real-time thought processes, commands, and steps." },
  { id: "07", icon: "🔍", title: "Review Code", desc: "Once the agents complete the task, open the Diff Viewer to see a clear side-by-side comparison of the code changes for human review." }
];

export default function DemoPlayer() {
  const params = useParams();
  const id = params.id as string;
  
  const title = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Demo";

  return (
    <div className="flex flex-col items-center flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-4"
        >
          <Link href="/demos" className="text-gray-500 hover:text-black font-medium transition">
            &larr; Back to Demos
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 pt-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">{title}</h1>
          <p className="text-lg text-gray-500 font-normal">
            {id === "sdlc-orchestrator" ? "Live interactive sandbox environment." : "Product deep dive and technical overview."}
          </p>
        </motion.div>

        {id === "sdlc-orchestrator" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            <div className="aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex items-center justify-center relative z-10">
              <iframe 
                src="https://sdlc-dashboard-app.bluesky-71bae4f3.eastus.azurecontainerapps.io/"
                className="absolute inset-0 w-full h-full border-0"
                title="SDLC Orchestrator Live Sandbox"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {/* AI Influencer Pipeline Write-up Section */}
        {id === "ai-influencer" && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-24 space-y-24"
          >
            {/* The Vision */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Zero-Touch Content Creation</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                The AI Influencer Pipeline entirely automates the creation of high-quality, photorealistic talking-head videos. No cameras, no microphones, and no editing software required.
              </p>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                By orchestrating three separate state-of-the-art AI models into one seamless flow, we turn a single reference photo and a text script into a broadcast-ready video. It is the ultimate tool for scaling personal branding and corporate communications.
              </p>
            </div>

            {/* Pipeline Architecture Grid */}
            <div className="grid md:grid-cols-2 gap-16 text-left">
              {/* The Tech Stack */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">⚙️</span> The Tech Stack
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">1. Identity Lock (Visuals)</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">We utilize **Gemini / Nano Banana Pro** to take a base photo and prompt, generating a pristine, 4K studio-quality portrait that serves as the visual anchor.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">2. Voice Cloning (Audio)</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">We integrate directly with **ElevenLabs** to transform your written script into a highly natural, emotive voice track matching your exact cloned voice.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">3. Lip Sync & Animation (Video)</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The static image and audio track are fed into **Kling AI's** advanced Avatar/Lip-Sync pipeline, mapping micro-expressions and generating a seamless, talking video.</p>
                  </div>
                </div>
              </div>

              {/* Functional Workflow */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">🚀</span> Automated Workflow
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">Single Command Trigger</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The entire pipeline is triggered via a single OpenClaw skill command, passing in the image path, visual prompt, text script, and voice ID.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Asynchronous Orchestration</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Because high-fidelity video generation can take 5-10 minutes, the orchestrator handles the asynchronous API calls and polling automatically in the background.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Social Media Auto-Publishing</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Once the final video is rendered and returned by Kling AI, it can be automatically routed to our LinkedIn or Instagram skills for immediate publishing.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Market Sentinel AI Write-up Section */}
        {id === "market-sentinel" && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-24 space-y-24"
          >
            {/* The Vision */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Algorithmic Paper Trading, Reimagined.</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                Market Sentinel AI provides a fully functional, risk-free mock trading environment. We combined traditional algorithmic trading strategies with advanced, multi-persona AI swarm intelligence.
              </p>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                Whether you are testing SMA crossovers, Mean Reversion strategies, or want to see how an AI interprets breaking news in real-time, Market Sentinel provides the ultimate backtesting and paper trading laboratory without risking real capital.
              </p>
            </div>

            {/* Architecture Grid */}
            <div className="grid md:grid-cols-2 gap-16 text-left">
              {/* Technical Components */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">⚙️</span> Technical Components
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">Virtual Portfolio Engine</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The system spins up an isolated, templated JSON banking engine starting with $10,000 USD, tracking PnL, cash balances, and trade history down to the millisecond.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Algorithmic Tick System</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">A headless Python engine executes single "ticks" via cron jobs or heartbeats. Every tick fetches live market data, evaluates historical price arrays, and executes mock trades.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Pluggable Strategies</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The core logic defaults to SMA Crossover but is built to be instantly swapped with Mean Reversion, Momentum Breakout, or RSI strategies based on user preferences.</p>
                  </div>
                </div>
              </div>

              {/* The "Miroshaw" Agentic Swarm */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">🤖</span> News-Driven Swarm Logic
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">Agentic Prediction Overrides</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Standard algorithms fail during black-swan events. When breaking news hits the wire (e.g. "Federal Reserve cuts rates by 50bps"), the system intercepts the standard logic and hands control to the AI.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">The Multi-Persona Consensus</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The bot dynamically spins up a swarm of specialized AI Trading Personas (Institutional, Retail, Contrarian). They debate the news in memory and generate a consensus override to buy, sell, or hold.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Risk Management Engine</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The system maintains strict exposure limits and stop-loss triggers. As seen in recent tests, even when options pull back (-12%), the Risk Manager holds strong to prevent catastrophic drawdowns.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {id === "sdlc-orchestrator" && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-24 space-y-24"
          >
            {/* The Vision */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">The Vision: AI-Driven Software Delivery</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                The SDLC Dashboard isn't just a development tool; it's a completely autonomous, multi-agent orchestrator. Built on our proprietary "Clean Core" architecture, it transforms high-level business requirements into verified, tested, and containerized applications.
              </p>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                By separating the Main Agent (secure operations) from Sub-Agents (risky, isolated tasks), we ensure maximum security while accelerating the delivery lifecycle by orders of magnitude. This platform eliminates developer bottlenecks, prevents AI hallucinations through strict citation verification, and delivers a human-in-the-loop sandbox for final approval.
              </p>
            </div>

            {/* Capabilities & Requirements Grid */}
            <div className="grid md:grid-cols-2 gap-16 text-left">
              {/* Capabilities */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">🧠</span> AI Capabilities & Integration
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">Autonomous Multi-Agent Pipeline</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Instead of relying on a single AI, we deploy a specialized swarm. The Project Manager Agent parses requirements, the Plan Agent generates execution manifests, and the Coding Agent executes the build.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Context & Retrieval Engine</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">The Retrieval Agent uses semantic search to build exact Context Briefs, while the Context Engine performs pre-flight memory recall of past mistakes to ensure previous bugs are never repeated.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Zero-Hallucination Governance</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">An independent Citation Agent verifies that all generated code is grounded in real, existing files. If it can't cite the exact file, the code is rejected.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Automated QA & Secure Sandboxing</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Once code passes citation, the QA Agent writes and executes tests. Finally, the Sandbox Deployment Agent automatically containerizes the application for secure, immediate human testing.</p>
                  </div>
                </div>
              </div>

              {/* Functional Requirements */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight border-b border-gray-200 pb-4 text-black flex items-center">
                  <span className="mr-3">⚙️</span> Functional Requirements
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-black text-lg">Requirement Breakdown</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Users can input multi-stack, high-level requirements which are automatically broken down into isolated SDLC sub-projects.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Execution Manifests</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Automated generation of step-by-step build plans for transparency and auditing.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Codebase Grounding</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Semantic and lexical search against existing codebase and documentation to ensure AI context is 100% accurate.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">Automated Verification</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Continuous logical correctness testing run natively against modified code.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">One-Click Review</h4>
                    <p className="text-gray-500 mt-2 leading-relaxed">Automated deployment of Dockerized sandbox environments for stakeholder/human review and final approval.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Apple-style Bento Box Layout for Steps */}
        {id === "sdlc-orchestrator" && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-24 pb-12 space-y-16"
          >
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">A closer look at the workflow.</h2>
              <p className="text-lg text-gray-500">Master the orchestrator step-by-step. Every component is designed to give you total control over the autonomous lifecycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickStartSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  whileHover={{ y: -5 }}
                  className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between
                    ${index === 3 || index === 6 ? 'lg:col-span-2' : ''}
                  `}
                >
                  <div>
                    <div className="text-4xl mb-6">{step.icon}</div>
                    <div className="text-xs font-bold text-gray-400 mb-3 tracking-widest uppercase">Step {step.id}</div>
                    <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center max-w-2xl mx-auto mt-12"
        >
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Interested in this Demo?</h3>
          <p className="text-gray-500 mb-6">Contact our sales team to get access to a private enterprise environment.</p>
          <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition inline-block">
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
