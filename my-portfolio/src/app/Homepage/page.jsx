'use client';

import Navbar from "@/app/components/layout/Navbar";
import Image from "next/image";
import SkillSection from "@/app/components/features/Homepage/Skill";
import ProjectSection from "../components/features/Homepage/Projects";
import BlogsLatest from "../components/features/Homepage/blogs.jsx";
import Certifications from "../components/features/Homepage/certifications.jsx";
import ContactPage from "../Contact/page.jsx";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Soft Decorative Glows */}
      <div className="absolute top-[-5rem] left-[-5rem] w-[25rem] h-[25rem] bg-blue-500/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[100px] z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-20 space-y-24">
          {/* Hero Section */}
          <section className="py-16 flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
            >
              <Image
                src="/profile.jpg"
                alt="Anas Faaiz"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
                Syed Anas Faaiz
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                Full Stack Developer | Startup Enthusiast
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto md:mx-0">
                I am a passionate Full Stack Developer with a keen interest in building innovative solutions. I love to explore new technologies and apply them to real-world problems.
              </p>

              <div className="space-y-3">
                <hr className="border-gray-700" />
                <p className="text-gray-400 py-3 italic">
                  "If you don’t take risks, you can’t create a future!"
                </p>
                <hr className="border-gray-700" />
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all">
                  Download CV
                </button>
                <button className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-6 py-2 rounded-md transition-all">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="scroll-mt-20" id="skills">
            <SkillSection />
          </section>

          {/* Projects Section */}
          <section className="scroll-mt-20" id="projects">
            <ProjectSection />
          </section>

          {/* Blogs Section */}
          <section className="scroll-mt-20" id="blogs">
            <BlogsLatest />
          </section>

          {/* Certifications Section */}
          <section className="scroll-mt-20" id="certifications">
            <Certifications />
          </section>

          {/* Contact Section */}
          <section className="scroll-mt-20" id="contact">
            <ContactPage />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Homepage;

