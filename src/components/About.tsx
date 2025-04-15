import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaDatabase, 
  FaCloud,
  FaDocker,
  FaGitAlt,
  FaNodeJs
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript,
  SiPython, 
  SiGraphql,
  SiMongodb,
  SiPostgresql
} from 'react-icons/si';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const skills = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern web technologies.',
      icons: [
        <FaReact key="react" className="text-[#61DAFB]" size={24} />,
        <SiTypescript key="ts" className="text-[#3178C6]" size={24} />,
        <SiJavascript key="js" className="text-[#F7DF1E]" size={24} />
      ]
    },
    {
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs.',
      icons: [
        <FaNodeJs key="node" className="text-[#339933]" size={24} />,
        <SiPython key="python" className="text-[#3776AB]" size={24} />,
        <SiGraphql key="graphql" className="text-[#E10098]" size={24} />
      ]
    },
    {
      title: 'DevOps & Cloud',
      description: 'Implementing CI/CD pipelines and cloud infrastructure.',
      icons: [
        <FaCloud key="cloud" className="text-[#FF9900]" size={24} />,
        <FaDocker key="docker" className="text-[#2496ED]" size={24} />,
        <FaGitAlt key="git" className="text-[#F05032]" size={24} />
      ]
    },
    {
      title: 'Database Management',
      description: 'Working with both SQL and NoSQL databases.',
      icons: [
        <FaDatabase key="db" className="text-[#336791]" size={24} />,
        <SiMongodb key="mongo" className="text-[#47A248]" size={24} />,
        <SiPostgresql key="postgres" className="text-[#336791]" size={24} />
      ]
    }
  ];

  return (
    <section id="about" className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-gray-900"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
              About Me
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
            A passionate Frontend Developer with 3+ years of experience in creating beautiful and functional web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_2rem_0_rgba(156,163,175,0.1)]"
            >
              <div className="flex items-center justify-center space-x-4 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {skill.icons.map((icon, i) => (
                  <div key={i} className="hover:scale-125 transition-transform duration-300">
                    {icon}
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in building scalable web applications with a focus on user experience and performance.
            My expertise includes modern JavaScript frameworks, responsive design, and implementing best practices
            for code quality and maintainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 