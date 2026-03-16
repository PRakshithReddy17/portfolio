import SectionHeading from "./SectionHeading";

function Skills({ skills }) {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I use to learn, build, and iterate."
          description="A flexible skill grid that works well for software, data, machine learning, and deployment-oriented profiles."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-primary-500 hover:text-primary-600 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-primary-400 dark:hover:text-primary-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
