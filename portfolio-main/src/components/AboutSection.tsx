import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
                Computer Science engineering student with a passion for creating innovative solutions.
                With a strong interest in AI/ML, I combine technical knowledge with creative problem-solving
                to build intelligent, user-focused applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Education
                    </h3>
                    <div className="space-y-2">
                      <p className="font-medium">BE in Computer Science</p>
                       {/* College Logo */}
                      <div className="pt-1 flex justify-start">
                        <img 
                          src="/imgs/smvitm1.png" 
                          alt="SMVITM Logo" 
                          className="h-16 object-contain opacity-80"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        SMVITM (Sri Madhwa Vadiraja Institute of Technology and Management)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Vishwothama Nagar, Bantakal, Karnataka
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2021 - Present
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {/* Dean's List (2023) */}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">
                          Vrisharya Technologies Pvt Ltd
                        </p>
                        <p className="text-sm text-muted-foreground">
                           Web Developer Intern
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Oct 2023 - Dec 2023
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">CloudKord</p>
                        <p className="text-sm text-muted-foreground">
                          backend development and Automation Intern
                        </p>
                        <p className="text-sm text-muted-foreground">
                          May 2024 - May 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Quantum Learnings</p>
                        <p className="text-sm text-muted-foreground">
                            Web development Intern
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Nov 2024 - Apr 2025
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png.jpg"
                  alt="Shashank Poojary"
                  loading="lazy"
                />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              {/* <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                6.71 GPA
              </div> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Shashank Poojary</h3>
              <p className="text-muted-foreground">
                Computer Science Student
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                AI/ML
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Web Apps
              </Badge>
              {/* <Badge variant="outline" className="bg-primary/10">
                Full Stack
              </Badge> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Shashank_Poojary_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
