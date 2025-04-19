import pic from "../assets/mansi1.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-white">
      <h1 className="my-4 text-center text-4xl">
        About
        <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          S
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={pic}
              alt="about me"
              className="w-full max-w-xs lg:max-w-lg h-88 object-cover object-[center_top] rounded-lg"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start "
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
