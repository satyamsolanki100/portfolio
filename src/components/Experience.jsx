import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="fade-up fade-delay-3 scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Briefcase className="text-blue-400" size={26} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="text-blue-400">Experience</span>
          </h2>
        </div>
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          My professional journey and internship experiences
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-7xl mx-auto space-y-8">
        <ExperienceCard
          title="Full Stack Developer Intern"
          company="Central Coalfields Limited (CCL)"
          date="June 2025"
          description="Built an Airline Reservation System using Java (Swing) and MySQL. Implemented modules for booking, cancellation, journey details, and boarding pass. Worked under Anita Meena in the System Department, CCL Ranchi."
          tags={["Java", "MySQL", "Swing", "Full Stack Development"]}
        />

        <ExperienceCard
          title="UI/UX Design Intern"
          company="CodSoft"
          date="June 2025 – July 2025"
          description="Designed responsive interfaces for web-based projects including a restaurant menu and an e-commerce website. Applied UI/UX principles to enhance usability, layout, and visual hierarchy using HTML and CSS."
          tags={["UI/UX", "HTML", "CSS", "Web Design"]}
        />

        <ExperienceCard
          title="Crowdfunding Intern"
          company="Muskurahat Foundation"
          date="June 2025 – July 2025"
          description="Raised ₹1,100 through structured outreach to support holistic education for underprivileged children. Developed fundraising, communication, and outreach skills outside core engineering domain."
          tags={["Communication", "Outreach", "Social Impact"]}
        />
      </div>
    </section>
  );
}

/* EXPERIENCE CARD */

function ExperienceCard({ title, company, date, description, tags }) {
  return (
    <div
      className="
        relative
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
      {/* Date Badge */}
      <span className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
        {date}
      </span>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-blue-400 mt-1 font-medium">{company}</p>

      <p className="text-gray-400 mt-4 leading-relaxed">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="
              px-4 py-1.5
              text-sm
              rounded-full
              border border-blue-500/40
              text-blue-400
              transition-all
              duration-300
              hover:scale-110
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
