import { Mail, Phone, Github, Mouse, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="fade-up scroll-mt-24 relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#242427] to-[#22252b]" />

      {/* Content */}
      <div className="relative max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Satyam Kumar Solanki
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-blue-400 font-medium">
          Computer Science Engineering Student
        </h2>

        <p className="mt-3 text-gray-300 text-base md:text-lg">
          Full Stack Developer | UI/UX Enthusiast
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Computer Science Engineering student with hands-on experience in
          full-stack development and UI/UX design through internships and
          academic projects. Passionate about building efficient, user-centric,
          and scalable applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium"
          >
            Get In Touch
          </a>

          <a
            href="https://drive.google.com/file/d/1b8N-Cc8G6WBnPbwuipxyBU3_zQ87WKxe/view"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 border border-white/10 text-white hover:bg-white/5 transition rounded-lg font-medium flex items-center gap-2"
          >
            <FileText size={16} />
            View Resume
          </a>

          <a
            href="https://github.com/satyamsolanki100"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition rounded-lg font-medium"
          >
            View GitHub
          </a>
        </div>

        {/* Contact Row */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a
            href="mailto:satyamkumarsolanki318@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Mail size={16} />
            satyamkumarsolanki318@gmail.com
          </a>

          <a
            href="tel:+918404958449"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Phone size={16} />
            +91 8404958449
          </a>

          <a
            href="https://github.com/satyamsolanki100"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Github size={16} />
            github.com/satyamsolanki100
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 text-gray-400 animate-bounce">
        <Mouse size={22} />
      </div>
    </section>
  );
}
