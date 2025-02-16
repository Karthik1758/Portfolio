import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "./UI/Button";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 text-center">
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Karthik Chakali
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer | Problem Solver | Tech Enthusiast
      </motion.p>
      <div className="flex justify-center gap-5 mb-6">
        <a href="https://github.com" className="text-3xl hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" className="text-3xl hover:text-gray-300">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" className="text-3xl hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
      <Button>Get in Touch</Button>
    </section>
  );
}
