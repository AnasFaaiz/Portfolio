"use client";
import { Mail, User, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center rounded-3xl">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-0" />

      {/* Main container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 space-y-12 text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg">
          Get in Touch
        </h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-6 pt-6">
          <SocialIcon
            imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discord/discord-original.svg"
            alt="Discord"
            link="https://discord.com/users/anasfaaiz"
          />
          <SocialIcon
            imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            link="https://linkedin.com/in/anasfaaiz"
          />
          <SocialIcon
            imgSrc="https://cdn.simpleicons.org/x/FFFFFF"
            alt="X (Twitter)"
            link="https://twitter.com/anasfaaiz"
          />
          <SocialIcon
            imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            link="https://github.com/anasfaaiz"
          />
        </div>
      </motion.div>
    </main>
  );
}

// Contact card
function ContactItem({ icon, title, value, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-start gap-4 p-5 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 transition duration-300 shadow-md h-full"
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

// Social icon button
function SocialIcon({ imgSrc, alt, link }) {
  return (
    <motion.a
      whileHover={{ scale: 1.15 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-white/5 p-3 hover:bg-gradient-to-br from-purple-500 to-blue-500 transition-all duration-300 shadow-md border border-white/10"
    >
      {/* Replaced Next.js Image with standard img tag to fix compilation error */}
      <img
        src={imgSrc}
        alt={alt}
        width={28}
        height={28}
        className="object-contain"
      />
    </motion.a>
  );
}

