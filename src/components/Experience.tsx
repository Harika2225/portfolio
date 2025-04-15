import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaExternalLinkAlt, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  competency: string;
  projectUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 'xebia',
    title: 'Software Engineer',
    company: 'Xebia (coMakeIT)',
    period: 'Jul 2023 – Present',
    location: 'Hyderabad',
    competency: 'Cloud-Native Web App Development',
    description: [
      'Led the integration of a standalone React application into a legacy Ruby on Rails monolith using Hasura GraphQL, improving system scalability, maintainability, and performance by 40%.',
      'Orchestrated a complete frontend-backend decoupling and rollout, achieving 100% successful migration from the Rails MVC framework.',
      'Published a private NPM library to standardize component usage across repositories, reducing redundant development effort by 30%.',
      'Implemented efficient GraphQL API integrations, enhancing data handling and reducing response times by 25%.',
      'Spearheaded urgent cross-team tasks within 24 hours, earning client recognition for speed and quality.',
      'Accelerated the launch of a complex feature set, deploying 2 weeks ahead of schedule and setting a new internal benchmark.'
    ],
    projectUrl: 'https://textpay.premiumparking.com/'
  },
  {
    id: 'associate',
    title: 'Associate Software Engineer',
    company: 'Xebia (coMakeIT)',
    period: 'Jul 2022 - Jun 2023',
    location: 'Hyderabad',
    competency: 'Modern Web Applications & Microservice Architectures',
    description: [
      'Designed scalable data pipelines using Python and Spark, cutting processing time by 40%.',
      'Built a Langchain-powered PDF chatbot, improving document search efficiency by 70%.',
      'Deployed Apache Airflow with AWS Glue DataBrew, ensuring 99.9% uptime for production ETL pipelines.',
      'Architected end-to-end cloud-native solutions with AWS, enabling seamless production deployments.',
      'Delivered visual workflow UIs using ReactFlow, increasing dev team efficiency by 35%.',
      'Utilized JHipster for frontend scaffolding and introduced feature flags in React/Angular, enabling safe and fast rollouts.'
    ],
    projectUrl: 'https://app.wedaa.tech/'
  },
  {
    id: 'project',
    title: 'Project Engineer',
    company: 'Xebia (coMakeIT)',
    period: 'Sep 2021- Jun 2022',
    location: 'Hyderabad',
    competency: 'Web & Mobile App Development',
    description: [
      'Built high-performance UIs using Angular (web) and React Native (mobile), boosting app performance by 25%.',
      'Delivered features like real-time chat through close collaboration with backend and product teams, earning client accolades.',
      'Quickly became productive in multiple stacks (Angular, React Native), reducing ramp-up time by 50%.',
      'Promoted clean coding standards and QA-friendly development, reducing bug count by 30%.',
      'Contributed to a J2EE-based airline booking system, optimizing UI with HTML, CSS, JavaScript, and Java.'
    ],
    projectUrl: 'https://www.flyerr.io/'
  }
];

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExperience = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
    <section id="experience" className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
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
              Experience
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border transition-all duration-500 ${
                expandedId === experience.id
                  ? 'border-gray-500 scale-[1.02] shadow-[0_0_2rem_0_rgba(156,163,175,0.1)]'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExperience(experience.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium bg-gray-700/50 text-gray-300 rounded-full">
                        {experience.competency}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-gray-500" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-500" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-500" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {experience.projectUrl && (
                      <a
                        href={experience.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                    <motion.div
                      animate={{
                        rotate: expandedId === experience.id ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === experience.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 