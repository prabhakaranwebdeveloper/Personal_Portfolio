import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const projects = [
  {
    title: "Car Showcase Website",
    description: `A fully responsive multi-page car showcase website built using HTML5, CSS3, and Bootstrap 5. 
Includes car listings, gallery, services, and a contact page with clean UI and structured layout.`,
    image: "/projects/bootstrap.png",
    tags: ["HTML5", "CSS3", "Bootstrap 5"],
    link: "https://bootstrap-multi-page-car-website.vercel.app/",
    FaGithub:
      "https://github.com/prabhakaranwebdeveloper/Bootstrap-Multi-Page-Car-website",
  },
  {
    title: "Food Delivery App",
    description: `A responsive food delivery web application built using React.js. 
Features include dynamic product listing, add-to-cart functionality, and a clean user interface for browsing and ordering food items.`,
    image: "/projects/FoodDelivery.png",
    tags: ["React", "JavaScript", "CSS3"],
    link: "https://react-food-delivery-app-ten.vercel.app/",
    FaGithub:
      "https://github.com/prabhakaranwebdeveloper/React-Food-Delivery-App",
  },
  {
    title: "College Website",
    description: `A responsive college website built using React.js. 
Includes multiple sections such as home, about, courses, and contact with a clean and modern UI design.`,
    image: "/projects/collegeWebsite.png",
    tags: ["React", "JavaScript", "CSS3"],
    link: "https://new-react-project-xi.vercel.app/",
    FaGithub: "https://github.com/prabhakaranwebdeveloper/New-React-Project",
  },
  {
    title: "Todo App",
    description: `A simple and responsive todo application built using React.js. 
Allows users to add, delete, and manage daily tasks with a clean and minimal user interface.`,
    image: "/projects/todo.png",
    tags: ["React", "TypeScript", "CSS3","Mysql"],
    link: "#",
    FaGithub: "https://github.com/prabhakaranwebdeveloper/React-todo-app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
               bg-transparent 
    dark:bg-gradient-to-t dark:from-black/40 dark:via-black/20 dark:to-transparent"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.FaGithub}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <a href="https://github.com/prabhakaranwebdeveloper" target="_blank">
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </a>
      </div>
    </section>
  );
};
