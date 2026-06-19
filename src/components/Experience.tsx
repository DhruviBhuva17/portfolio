"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

/* ================= TYPES ================= */
type ExperienceType = {
  title: string;
  company: string;
  date: string;
  location: string;
  type: string;
  color: string;
  dot: string;
  description: string[];
  skills: string[];
  link?: string;
};

/* ================= DATA ================= */
const experiences: ExperienceType[] = [
  {
    title: "Software Developer",
    company: "ChallengeRate.com",
    date: "Aug 2025 – Oct 2025",
    location: "Remote",
    type: "Internship",
    color: "from-blue-500 to-cyan-500",
    dot: "bg-blue-500",
    link: "challengerate.com",
    description: [
      "Developed scalable B2B e-commerce solutions using React.js, Next.js, Node.js, and PayloadCMS.",
      "Built responsive, SEO-friendly UIs with TailwindCSS and integrated RESTful APIs.",
      "Collaborated in Agile environment and improved performance by 30%.",
    ],
    skills: ["Full-Stack Development", "Agile Methodology", "Team Work", "Critical Thinking"],
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    date: "May 2026 – Aug 2026",
    location: "Remote",
    type: "Open Source Program",
    color: "from-pink-500 to-purple-500",
    dot: "bg-pink-500",
    link: "https://gssoc.girlscript.org",
    description: [
      "Contributed to open-source projects by implementing new features and fixing bugs.",
      "Collaborated with mentors and contributors through Git and GitHub workflows.",
      "Improved project documentation, code quality, and participated in community-driven development."
    ],
    skills: [
      "Open Source",
      "Git & GitHub",
      "JavaScript",
      "React.js",
      "Problem Solving",
      "Collaboration"
    ],
  },
  {
    title: "Participant",
    company: "Flipkart GRiD 7.0",
    date: "2025",
    location: "Remote",
    type: "Competition",
    color: "from-purple-500 to-pink-500",
    dot: "bg-purple-500",
    description: [
      "Participated in a national-level engineering challenge by Flipkart.",
      "Applied strong skills in DSA and problem-solving.",
      "Solved real-world case studies.",
    ],
    skills: ["Competitive Programming", "Data Structures", "Algorithms", "System Design"],
  },

];

/* ================= CARD ================= */
function ExperienceCard({ exp, index }: { exp: ExperienceType; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center mb-16">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full ${exp.dot}`}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        className={`w-full md:w-[45%] ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
          }`}
      >
        <SpotlightCard className="rounded-2xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between mb-2">
              <span className="text-xs px-2 py-1 bg-primary text-white rounded">
                {exp.type}
              </span>
              <div className="flex items-center gap-1 text-xs">
                <Calendar className="h-3 w-3" />
                {exp.date}
              </div>
            </div>

            <h3 className="text-lg font-semibold">{exp.title}</h3>

            <div className="flex gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Building className="h-3 w-3" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {exp.location}
              </span>

              {exp.link && (
                <a
                  href={`https://${exp.link}`}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-500"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>

            {/* Description */}
            <ul className="mb-3 text-sm space-y-1">
              {exp.description.map((d, i) => (
                <li key={i}>• {d}</li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}

/* ================= MAIN ================= */
export function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-center mb-12">
          Experience & Leadership
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 w-[2px] bg-gray-300 h-full -translate-x-1/2" />

          <motion.div
            style={{ height }}
            className="absolute left-1/2 w-[2px] bg-blue-500 -translate-x-1/2"
          />

          {/* Cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}