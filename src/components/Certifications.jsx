import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="fade-up scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Award size={26} className="text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-blue-400">Certifications</span>
          </h2>
        </div>
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Professional certifications and technical achievements
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <CertCard
          title="Artificial Intelligence Fundamentals"
          provider="IBM SkillsBuild"
          year="2025"
          link="https://drive.google.com/file/d/1qvXnKPBSGVZ32HDz5MLJcoHOY1K2xQb2/view?usp=drivesdk"
        />

        <CertCard
          title="Cloud Computing Fundamentals"
          provider="IBM SkillsBuild"
          year="2025"
          link="https://drive.google.com/file/d/1rytw21hIbwkWAsB_xO_qrvYYq9rc1Vec/view?usp=drivesdk"
        />
      </div>
    </section>
  );
}

/* CERT CARD */

function CertCard({ title, provider, year, link }) {
  return (
    <div
      className="
        bg-[#0f172a]
        border border-white/5
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="text-blue-400 mt-1 font-medium">{provider}</p>

      <p className="text-gray-400 text-sm mt-1">{year}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          inline-flex items-center gap-2
          mt-4
          text-blue-400
          text-sm
          transition-all
          hover:underline
        "
      >
        View Certificate
        <ExternalLink size={14} />
      </a>
    </div>
  );
}
