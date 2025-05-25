import { motion } from "framer-motion";
import { Brain, Smartphone, Mic, Users, Zap, Puzzle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Game Generation",
    description: "Automatically create game scenes, mechanics, and assets from natural language prompts using Claude AI. Turn your ideas into playable prototypes instantly.",
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Deployment",
    description: "Export your games to PC and mobile platforms with minimal configuration. One codebase, multiple platforms, maximum reach.",
    color: "secondary"
  },
  {
    icon: Mic,
    title: "Voice & Text Input",
    description: "Accept both typed and voice commands for flexible, hands-free game creation. Design while you speak, code while you think.",
    color: "accent"
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Enable multiple users to edit game projects simultaneously with synced updates. Build together, ship faster.",
    color: "success"
  },
  {
    icon: Zap,
    title: "Instant Game Generation",
    description: "Generate complete game worlds from simple text prompts in seconds. From concept to playable prototype in record time.",
    color: "primary"
  },
  {
    icon: Puzzle,
    title: "No-Code Game Design",
    description: "Create complex game mechanics without writing a single line of code. Visual scripting meets AI intelligence.",
    color: "secondary"
  }
];

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  accent: "bg-accent/20 text-accent",
  success: "bg-green-500/20 text-green-400"
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience the future of game development with AI-powered tools that transform your creative vision into reality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="animate-on-scroll glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colorClasses[feature.color as keyof typeof colorClasses]} transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
