import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaServer, 
  FaTools, 
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
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiCypress,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions
} from 'react-icons/si';

interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon: React.ReactElement;
    level: number;
  }[];
}

const skills: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern web technologies.',
    skills: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 80 },
      { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" />, level: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
      { name: 'Jest', icon: <SiJest className="text-[#C21325]" />, level: 80 },
    ]
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications.',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
      { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 80 },
      { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" />, level: 75 },
      { name: 'REST APIs', icon: <FaServer className="text-gray-400" />, level: 85 }
    ]
  },
  {
    title: 'DevOps & Cloud',
    description: 'Implementing CI/CD pipelines and cloud infrastructure.',
    skills: [
      { name: 'AWS', icon: <SiAmazonaws className="text-[#FF9900]" />, level: 75 },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, level: 80 },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-[#326CE5]" />, level: 70 },
      { name: 'Jenkins', icon: <SiJenkins className="text-[#D24939]" />, level: 75 },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF]" />, level: 80 }
    ]
  },
  {
    title: 'Database Management',
    description: 'Working with both SQL and NoSQL databases.',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, level: 75 }
    ]
  }
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
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
              Skills
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_2rem_0_rgba(156,163,175,0.1)]"
            >
              <h3 className="text-2xl font-bold text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 group-hover/skill:text-gray-100 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gray-400 to-gray-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/5 to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 