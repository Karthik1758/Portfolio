import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "./UI/Button";

export default function Home() {
  return (
    <section id="home">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 text-center">
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
          Full Stack Developer
        </motion.p>
        <motion.p
          className="text-md mb-6 w-3/4 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Accomplished Full Stack Developer with 2+ years of experience in building government applications and
          freelancing for private companies.
        </motion.p>
        <div className="flex justify-center gap-5 mb-6">
          <a href="https://github.com/Karthik1758" className="text-3xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karthik-chakali/" className="text-3xl hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
        <Button onClick={() => window.location.href = "mailto:chakalikarthik2001@gmail.com"}>
  Get in Touch
        </Button>
      </div>
    </section>
  );
}
