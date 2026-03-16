import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

function Projects({ projects }) {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that reflects both engineering and experimentation."
          description="Each card includes a short overview, the stack used, and quick links to source code and demo pages."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:border-primary-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="inline-flex w-fit rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                Featured Project
              </div>
              <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-primary-400 dark:hover:text-primary-300"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
