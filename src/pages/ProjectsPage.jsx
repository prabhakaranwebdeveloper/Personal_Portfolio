// src/pages/ProjectsPage.jsx
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { Projects } from "@/sections/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}