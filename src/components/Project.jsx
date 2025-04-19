import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="py-8 md:py-12 w-full">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl md:text-5xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-gray-800 p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-40 md:h-48 w-full overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="mt-3 md:mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">{project.description}</p>
              <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-purple-900/50 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-purple-300 hover:bg-purple-800/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
