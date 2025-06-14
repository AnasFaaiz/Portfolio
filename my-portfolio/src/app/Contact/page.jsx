"use client";
import React from "react";
import { Mail, User, Phone } from "lucide-react";
import { motion } from "framer-motion"; // Optional: Add framer-motion for animation

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 px-4 py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 space-y-10 text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg">
          Get in Touch
        </h1>

        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ContactItem
            icon={<User className="text-purple-300 w-6 h-6" />}
            title="Name"
            value="Syed Anas Faaiz"
          />
          <ContactItem
            icon={<Mail className="text-blue-300 w-6 h-6" />}
            title="Email"
            value="syed.anasfaaiz@gmail.com"
            link="mailto:syed.anasfaaiz@gmail.com"
          />
          <ContactItem
            icon={<Phone className="text-green-300 w-6 h-6" />}
            title="Phone"
            value="+91 7093035427"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-5 pt-6">
          <SocialIcon
            imgSrc="/skills/discord.svg"
            alt="Discord"
            link="https://discord.com/users/anasfaaiz"
          />
          <SocialIcon
            imgSrc="/skills/linkedin.svg"
            alt="LinkedIn"
            link="https://linkedin.com/in/anasfaaiz"
          />
          <SocialIcon
            imgSrc="/skills/twitter.svg"
            alt="Twitter"
            link="https://twitter.com/anasfaaiz"
          />
          <SocialIcon
            imgSrc="/skills/github.svg"
            alt="GitHub"
            link="https://github.com/anasfaaiz"
          />
        </div>
      </motion.div>
    </main>
  );
}

// Contact Card
function ContactItem({ icon, title, value, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-start gap-4 p-5 bg-gray-800/40 rounded-xl hover:bg-gray-800 transition duration-300 shadow-md h-full"
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full shadow-inner shrink-0">
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <h2 className="text-sm font-medium text-gray-400">{title}</h2>
        {link ? (
          <a
            href={link}
            className="text-base text-blue-400 font-semibold hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-base text-gray-100 font-semibold break-words">{value}</p>
        )}
      </div>
    </motion.div>
  );
}

// Social Media Button
function SocialIcon({ imgSrc, alt, link }) {
  return (
    <motion.a
      whileHover={{ scale: 1.15 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-gray-800 p-3 hover:bg-gradient-to-br from-purple-500 to-blue-500 shadow-md"
    >
      <img
        src={imgSrc}
        alt={alt}
        className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300"
      />
    </motion.a>
  );
}

