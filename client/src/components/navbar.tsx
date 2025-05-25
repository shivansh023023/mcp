import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95' : 'bg-white/10'
      } glass-effect`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Box className="text-primary text-2xl" />
            <span className="text-xl font-bold gradient-text">Unity MCP</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('problems')}
              className="hover:text-primary transition-colors duration-300"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className="hover:text-primary transition-colors duration-300"
            >
              Market
            </button>
            <motion.button
              onClick={() => scrollToSection('github')}
              className="bg-primary hover:bg-indigo-700 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Use Unity
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('problems')}
              className="block w-full text-left hover:text-primary transition-colors duration-300"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className="block w-full text-left hover:text-primary transition-colors duration-300"
            >
              Market
            </button>
            <button
              onClick={() => scrollToSection('github')}
              className="bg-primary hover:bg-indigo-700 w-full py-2 rounded-lg transition-all duration-300"
            >
              Use Unity
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
