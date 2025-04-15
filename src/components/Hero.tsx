import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaHome,
  FaUser,
  FaTools,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">Harika Sree</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-primary transition-colors flex items-center"
            >
              <FaHome className="mr-2" />
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-primary transition-colors flex items-center"
            >
              <FaUser className="mr-2" />
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-primary transition-colors flex items-center"
            >
              <FaTools className="mr-2" />
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-primary transition-colors flex items-center"
            >
              <FaEnvelopeOpen className="mr-2" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Terminal: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sections = useMemo(() => [
    {
      title: "Skills",
      content: [
        "> Frontend: React, TypeScript, Next.js",
        "> Backend: Node.js, Python, GraphQL",
        "> UI/UX: Tailwind CSS, Framer Motion",
        "> Tools: Git, VS Code, Figma",
        "> Databases: MongoDB, PostgreSQL",
      ],
    },
    {
      title: "Education",
      content: [
        "> B.Tech, Computer Science",
        "> CMR College of Engineering",
        "> 2018 - 2022",
        "> CGPA: 9.02",
      ],
    },
    {
      title: "Experience",
      content: [
        "> Software Engineer @ Xebia",
        "> Frontend Development Expert",
        "> 3+ years of experience",
        "> Specializing in React & TypeScript",
      ],
    },
  ], []);

  useEffect(() => {
    const currentSectionContent = sections[currentSection];
    const fullText = currentSectionContent.content.join("\n");

    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentSection((currentSection + 1) % sections.length);
          setCurrentIndex(0);
          setDisplayText("");
          setIsTyping(true);
        }, 1000);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentSection, sections]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Terminal container */}
      <div className="relative bg-gray-900/95 rounded-lg p-6 font-mono text-sm border border-gray-800 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            />
          </div>
          <motion.div 
            className="text-gray-400 text-xs font-bold tracking-wider"
            animate={{ 
              color: isHovered ? ["#60A5FA", "#A78BFA", "#60A5FA"] : "#9CA3AF"
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            TERMINAL
          </motion.div>
          <motion.button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            {isMinimized ? "↑" : "↓"}
          </motion.button>
        </div>

        {/* Terminal Content */}
        <motion.div
          animate={{ height: isMinimized ? 0 : "auto" }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="text-blue-400 mb-2 flex items-center">
            <span className="font-bold">harika@portfolio:~$</span>
            <motion.span
              animate={{ opacity: isTyping ? [0, 1, 0] : 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 text-white"
            >
              █
            </motion.span>
          </div>
          <div className="text-white whitespace-pre-line">
            {displayText}
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <motion.div 
          className="mt-4 flex items-center justify-between text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2">
            <span>Press</span>
            <kbd className="px-2 py-1 bg-gray-800 rounded border border-gray-700">Tab</kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center space-x-2">
            <motion.span 
              className="text-green-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ●
            </motion.span>
            <span>Connected</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center relative"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500 animate-gradient">
                  Harika Sree Tummalakuntla
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 mb-6">
                Front-End Developer
              </h2>
              <p className="text-lg text-gray-500 max-w-lg">
                I'm a Frontend Developer passionate about crafting beautiful,
                functional web experiences using React, TypeScript, and modern
                web technologies. I specialize in building fast, responsive
                applications with intuitive interfaces that deliver both high
                performance and seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="group flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              <motion.a
                href="https://github.com/Harika2225"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/harika-sree-tummalakuntla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:harikasree2k@gmail.com"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Terminal */}
          <motion.div variants={itemVariants} className="relative">
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
