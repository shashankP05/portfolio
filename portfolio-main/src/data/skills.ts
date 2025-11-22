
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [ "MySQL", "Firebase", "PostgreSQL", "Pinecone", "MongoDB"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Docker", "AWS(EC2, S3)"],
  },
  // {
  //   name: "",
  //   icon: Palette,
  //   skills: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
  // },
];
