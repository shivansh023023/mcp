import { motion } from "framer-motion";
import { Download, Settings, Rocket, Book } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const steps = [
  {
    icon: Download,
    title: "1. Clone Repository",
    description: "Download Unity MCP from our GitHub repository",
    color: "primary"
  },
  {
    icon: Settings,
    title: "2. Setup Integration",
    description: "Connect with Claude Desktop or Cursor AI",
    color: "secondary"
  },
  {
    icon: Rocket,
    title: "3. Start Creating",
    description: "Begin building games with AI assistance",
    color: "accent"
  }
];

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  accent: "bg-accent/20 text-accent"
};

export default function GitHubIntegration() {
  const handleGitHubClick = () => {
    window.open('https://github.com/TanushShoor/ThreatSim-Buildverse.git', '_blank');
  };

  return (
    <section id="github" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Transform your game development workflow today. Access Unity MCP through our GitHub repository and start building your next masterpiece with AI assistance.
            </p>
          </motion.div>
          
          <motion.div
            className="glass-effect p-8 rounded-2xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${colorClasses[step.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={handleGitHubClick}
              className="bg-primary hover:bg-indigo-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.4)',
                  '0 0 40px rgba(99, 102, 241, 0.8)',
                  '0 0 20px rgba(99, 102, 241, 0.4)'
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <FaGithub className="text-xl" />
              Use Unity MCP
            </motion.button>
            
            <motion.button
              className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Book className="text-lg" />
              Documentation
            </motion.button>
          </motion.div>
          
          <motion.div
            className="mt-12 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Compatible with Unity 2021.3+ • Requires Claude Desktop or Cursor AI • Open Source MIT License</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
