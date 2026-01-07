import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="fade-up scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-2 mb-2">
          <FolderGit2 size={26} className="text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-blue-400">Projects</span>
          </h2>
        </div>
        <div className="mt-3 w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A showcase of my technical projects and real-world applications
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Project 1 */}
        <ProjectCard
          title="Online Airline Reservation System"
          description="Developed a GUI-based reservation system for booking, cancellation, and postponement of flights. Backend integrated with MySQL and complete data validation. Built during internship at Central Coalfields Limited (CCL)."
          features={[
            "Flight booking & cancellation",
            "Journey details management",
            "Boarding pass generation",
            "MySQL-backed data validation",
          ]}
          technologies={["Java", "Swing", "MySQL", "JDBC"]}
          codeLink="https://github.com/satyamsolanki100"
          liveLink="#"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Library Management System"
          description="Desktop-based application for managing library operations with complete CRUD functionality. Built using Java Swing and JDBC with MySQL database integration."
          features={[
            "Book issue & return system",
            "User & inventory management",
            "CRUD operations",
            "Database integration",
          ]}
          technologies={["Advanced Java", "Swing", "MySQL", "JDBC"]}
          codeLink="https://github.com/satyamsolanki100"
          liveLink="#"
        />
      </div>
    </section>
  );
}

/* PROJECT CARD */

function ProjectCard({
  title,
  description,
  features,
  technologies,
  codeLink,
  liveLink,
}) {
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
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

      <p className="text-gray-400 leading-relaxed mb-4">{description}</p>

      <h4 className="text-white font-medium mb-2">Key Features:</h4>

      <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h4 className="text-white font-medium mb-3">Technologies Used:</h4>

      <div className="flex flex-wrap gap-3 mb-6">
        {technologies.map((tech, index) => (
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
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href={codeLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-lg
            border border-white/10
            text-white
            transition-all
            hover:bg-white/5
          "
        >
          <Github size={16} />
          Code
        </a>

        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-blue-600
            text-white
            transition-all
            hover:bg-blue-700
          "
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );
}
