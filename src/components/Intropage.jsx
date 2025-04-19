import { HERO_CONTENT } from "../constants";
import profile from "../assets/mansi.png";
import { motion } from "framer-motion";

const Intropage = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-35 text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Mansi Jadav
              </motion.h1>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-4xl tracking-tight text-transparent"
              >
                Frontend Developer
              </motion.span>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="my-2 max-w-xl py-6 font-light tracking-tight "
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            src={profile}
            className="w-full max-w-xs lg:max-w-lg h-90 object-cover object-[center_top] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Intropage;
