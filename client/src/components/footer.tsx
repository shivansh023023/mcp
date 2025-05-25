import { motion } from "framer-motion";
import { Box } from "lucide-react";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const footerLinks = {
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Examples", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "API Reference", href: "#" }
  ],
  community: [
    { name: "GitHub", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Forum", href: "#" },
    { name: "Support", href: "#" }
  ]
};

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaDiscord, href: "#", label: "Discord" }
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Box className="text-primary text-2xl" />
              <span className="text-xl font-bold gradient-text">Unity MCP</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Revolutionizing game development with AI-powered tools that transform creative vision into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <div className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; 2024 Unity MCP. All rights reserved. Made with ❤️ for game developers.</p>
        </motion.div>
      </div>
    </footer>
  );
}
