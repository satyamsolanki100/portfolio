import { Code2, Globe, Database, Users } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="fade-up fade-delay-2 scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="mt-3 w-16 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional
          skill set
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <SkillCard
          icon={<Code2 size={20} />}
          title="Programming Languages"
          tags={["Java (Core & Advanced)", "C", "C++", "Python"]}
          color="blue"
        />

        <SkillCard
          icon={<Globe size={20} />}
          title="Web Technologies"
          tags={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "MySQL"]}
          color="green"
        />

        <SkillCard
          icon={<Database size={20} />}
          title="Databases & Tools"
          tags={["MySQL", "JDBC", "OOP", "Data Structures", "Algorithms"]}
          color="purple"
        />

        <SkillCard
          icon={<Users size={20} />}
          title="Soft Skills"
          tags={[
            "Leadership",
            "Problem Solving",
            "Communication",
            "Web Design",
          ]}
          color="orange"
        />
      </div>
    </section>
  );
}

/* SKILL CARD */

function SkillCard({ icon, title, tags, color }) {
  const colorMap = {
    blue: "border-blue-500/40 text-blue-400 hover:shadow-blue-500/20",
    green: "border-green-500/40 text-green-400 hover:shadow-green-500/20",
    purple: "border-purple-500/40 text-purple-400 hover:shadow-purple-500/20",
    orange: "border-orange-500/40 text-orange-400 hover:shadow-orange-500/20",
  };

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
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-blue-400">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`
              px-4 py-1.5 
              text-sm 
              rounded-full 
              border 
              transition-all 
              duration-300 
              hover:scale-110 
              ${colorMap[color]}
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
