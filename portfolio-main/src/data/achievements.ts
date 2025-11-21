
import { Trophy, Star, Award,ScrollText,Code2} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "Publications" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "ICRCE 2025",
    type: "Publications",
    year: "2025",
    description: "Published paper on data augmentation using GANs in the ICRCE 2025 event.",
    icon: ScrollText,
  },
  // {
  //   id: 2,
  //   title: "3rd Place - INTELLECT 1.0 Hackathon",
  //   type: "competition", 
  //   year: "2024",
  //   description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
  //   icon: Trophy,
  // },
  // {
  //   id: 4,
  //   title: "Dean's List",
  //   type: "Workshop",
  //   year: "2023",
  //   description: "Conducted a workshop on Git and GitHub, teaching version control and collaboration skills.",
  //   icon: Code2,
  // },
  {
    id: 2,
    title: "Python Certification",
    type: "certification",
    year: "2024",
    description: "Completed comprehensive Python programming certification.",
    icon: Award,
  },
  {
    id: 3,
    title: "SQL Certification",
    type: "certification",
    year: "2024",
    description: "Earned certification in SQL database management and querying.",
    icon: Award,
  },
  // {
  //   id: 6,
  //   title: "Prompt Engineering Certification",
  //   type: "certification",
  //   year: "2023",
  //   description: "Completed specialized training in AI prompt engineering techniques.",
  //   icon: Award,
  // },
];
