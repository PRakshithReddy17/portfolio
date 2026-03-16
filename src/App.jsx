import { useEffect, useMemo, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const socialLinks = useMemo(
    () => [
      { label: "GitHub", href: portfolioData.github },
      { label: "LinkedIn", href: portfolioData.linkedin },
      { label: "Email", href: `mailto:${portfolioData.email}` },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <main>
        <Hero data={portfolioData} socialLinks={socialLinks} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData} socialLinks={socialLinks} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
