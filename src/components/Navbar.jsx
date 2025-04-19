// import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="text-white mb-20 items-center py-6 p-2 ">
      <div className="flex justify-between p-3">
        <div className="text-4xl">MJ</div>
        <div className=" flex justify-center items-center gap-2 px-2 text-2xl">
          <a
            href="https://www.linkedin.com/in/mansi-jadav-381051250"
            target="_blank"
            rel="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/man139/Android-Workspace"
            target="_blank"
            rel="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/__.man.si_139.__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          {/* <FaGithub />
          <FaTwitter />
          <FaInstagram /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
