import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="py-8 md:py-12 w-full">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-5xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
      >
        Experience
      </motion.h1>
      <div className="max-w-5xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 p-4 md:p-6 rounded-lg bg-gray-800 hover:bg-gray-700/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full md:w-1/4">
                <p className="text-sm md:text-base text-purple-300 font-medium">{experience.year}</p>
              </div>
              <div className="w-full md:w-3/4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <span className="text-sm md:text-base text-purple-300">
                    @ {experience.company}
                  </span>
                </div>
                <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-purple-900/50 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-purple-300 hover:bg-purple-800/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
