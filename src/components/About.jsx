import { MapPin, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="fade-up scroll-mt-24 px-6 md:px-12 lg:px-20 py-24 bg-[#0b1220]"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="mt-3 w-16 h-1 bg-blue-500 mx-auto rounded"></div>
      </div>

      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Who I Am */}
        <div className="bg-[#0f172a] border border-white/5 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>

          <p className="text-gray-400 leading-relaxed">
            I am a driven B.Tech student in Computer Science Engineering at
            Amity University Ranchi, with a strong foundation in programming and
            web technologies. I have hands-on experience in full-stack
            development and UI/UX design through internships, and I’m passionate
            about building efficient, user-centric applications.
          </p>

          <div className="mt-4 flex items-center gap-2 text-gray-400">
            <MapPin size={16} className="text-blue-400" />
            Ranchi, India
          </div>
        </div>

        {/* Education */}
        <div className="bg-[#0f172a] border border-white/5 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>

          <div className="space-y-8">
            {/* Amity */}
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="absolute left-[7px] top-6 h-full w-px bg-blue-500/30"></span>

              <h4 className="text-white font-medium">
                Amity University, Ranchi
              </h4>
              <p className="text-blue-400 text-sm">
                Bachelor of Technology in Computer Science Engineering
              </p>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                <span>2022 – 2026</span>
                <span className="px-3 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                  CGPA: 6.94
                </span>
              </div>
            </div>

            {/* Greenland */}
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="absolute left-[7px] top-6 h-full w-px bg-blue-500/30"></span>

              <h4 className="text-white font-medium">
                Greenland Public School, Ranchi
              </h4>
              <p className="text-blue-400 text-sm">Intermediate (12th) CBSE</p>
              <p className="text-sm text-gray-400">2020 – 2022</p>
            </div>

            {/* Kairali */}
            <div className="relative pl-8">
              <span className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full"></span>
              <span className="absolute left-[7px] top-6 h-[42px] w-px bg-blue-500/30"></span>

              <h4 className="text-white font-medium">Kairali School, Ranchi</h4>
              <p className="text-blue-400 text-sm">Matriculation (10th) CBSE</p>
              <p className="text-sm text-gray-400">2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership & Activities */}
      <div className="mt-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2 bg-[#0f172a] border border-white/5 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Leadership & Activities
            </h3>
          </div>

          <ul className="space-y-3 text-gray-400 list-disc list-inside">
            <li>
              Core Member of Discipline Committee at Amity University Ranchi
              <span className="text-gray-500"> (2022 – 2026)</span>
            </li>

            <li>
              Head Core Team for Engineer’s Day, Nextech Fiesta, and Science
              Exhibition
            </li>

            <li>Sports Coordinator for Volleyball and Tug of War events</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
