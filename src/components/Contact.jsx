import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8d2tpyh",
        "template_dz4heuk",
        e.target,
        "7cDpaNdimdJxksSlf"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="fade-up scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="bg-[#0f172a] border border-white/5 rounded-xl p-6 space-y-5">
          <h3 className="text-xl font-semibold text-white">
            Contact Information
          </h3>

          <a
            href="mailto:satyamkumarsolanki318@gmail.com"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
          >
            <Mail size={18} />
            satyamkumarsolanki318@gmail.com
          </a>

          <a
            href="tel:+918404958449"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
          >
            <Phone size={18} />
            +91 8404958449
          </a>

          <div className="flex items-center gap-3 text-gray-400">
            <MapPin size={18} />
            Ranchi, India
          </div>

          <a
            href="https://github.com/satyamsolanki100"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
          >
            <Github size={18} />
            github.com/satyamsolanki100
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-[#0f172a] border border-white/5 rounded-xl p-6 space-y-4"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="input"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="input"
          />

          <input name="subject" placeholder="Subject" className="input" />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="input"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-medium flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-20 border-t border-white/5 pt-6 text-center text-gray-400 text-sm">
        © 2026 Satyam Kumar Solanki. All rights reserved.
      </div>
    </section>
  );
}
