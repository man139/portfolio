import {
  RiReactjsLine,
  RiNextjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiBootstrapLine,
  RiJavascriptLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

const iconVarient = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsLine className="text-7xl text-white " />
        </motion.div>
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiHtml5Line className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiCss3Line className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiBootstrapLine className="text-7xl text-purple-800" />
        </motion.div>
        <motion.div
          variants={iconVarient(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
