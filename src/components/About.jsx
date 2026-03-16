import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

function About({ data }) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering curiosity backed by practical building."
          description="A quick introduction that highlights academic background, technical direction, and what makes this portfolio meaningful."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{data.about}</p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary-600 dark:text-primary-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{data.branch}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{data.college}</p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary-600 dark:text-primary-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Strengths</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Strong problem-solving, fast learning, and a growing interest in deploying models that create measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
