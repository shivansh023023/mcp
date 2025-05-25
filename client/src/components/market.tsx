import { motion } from "framer-motion";
import { Users, TrendingUp, Lightbulb, ExpandIcon, DollarSign, UserCheck, Puzzle } from "lucide-react";

const marketData = [
  {
    icon: Users,
    title: "Target Audience",
    description: "Game developers, indie studios, and aspiring game designers worldwide",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "Market Trend",
    description: "Significant growth in AI-driven development and real-time collaboration tools",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Survey Insights",
    description: "Strong interest in no-code game creation and AI-powered world building",
    color: "accent"
  },
  {
    icon: ExpandIcon,
    title: "Expansion",
    description: "Opportunities across game studios, educational platforms, and VR",
    color: "success"
  }
];

const feasibilityPoints = [
  {
    icon: DollarSign,
    title: "Cost-Effective Development",
    description: "Built using Unity's open-source packages and cloud-based services for maximum efficiency.",
    color: "success"
  },
  {
    icon: UserCheck,
    title: "Developer-Friendly",
    description: "Designed to simplify game creation for both beginners and expert developers.",
    color: "primary"
  },
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description: "Can be extended and upgraded with new features seamlessly as technology evolves.",
    color: "secondary"
  },
  {
    icon: ExpandIcon,
    title: "Scalable Infrastructure",
    description: "Easily deployable across different game genres and platforms with consistent performance.",
    color: "accent"
  }
];

const colorClasses = {
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  accent: "bg-accent/20 text-accent",
  success: "bg-green-500/20 text-green-400"
};

export default function Market() {
  return (
    <section id="market" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Market <span className="gradient-text">Potential</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the AI-driven revolution in game development with massive market opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {marketData.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${colorClasses[item.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto animate-on-scroll">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Why Unity MCP Is Feasible</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {feasibilityPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <h4 className="text-xl font-semibold mb-3 flex items-center group-hover:text-primary transition-colors duration-300">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${colorClasses[point.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                      <point.icon className="text-sm" />
                    </div>
                    {point.title}
                  </h4>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
