import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/prabhakaranwebdeveloper", label: "FaGithub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/prabhakaran-frontend-developer/", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "FaTwitter" },
];



export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Prabhakaran Ukkirapandian<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Prabhakaran Ukkirapandian. All rights reserved.
            </p>
          </div>

       

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
