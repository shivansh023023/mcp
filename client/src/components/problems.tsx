import { motion } from "framer-motion";
import { DollarSign, Box, Code, Clock, CheckCircle } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "High Development Costs",
    description: "Traditional game development requires expensive tools, assets, and lengthy development cycles that drain budgets."
  },
  {
    icon: Box,
    title: "Limited Access to 3D Assets",
    description: "Quality 3D models, textures, and animations are expensive and time-consuming to create or acquire."
  },
  {
    icon: Code,
    title: "Complex Game Mechanics Coding",
    description: "Implementing game logic requires deep programming knowledge and extensive debugging time."
  },
  {
    icon: Clock,
    title: "Time-Consuming Prototyping",
    description: "Creating playable prototypes takes weeks or months, slowing down the iteration process."
  }
];

const solutions = [
  "Cost-effective AI-powered development",
  "Automated asset generation and management",
  "Natural language game programming",
  "Instant prototyping and iteration",
  "Consistent quality with AI assistance"
];

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solving <span className="gradient-text">Development Struggles</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unity MCP addresses the core challenges that have been holding back game developers for years.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className="flex items-start space-x-4 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                  <problem.icon className="text-red-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-300 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="glass-effect p-8 rounded-2xl animate-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">Our Solution</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <span className="text-lg">{solution}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
