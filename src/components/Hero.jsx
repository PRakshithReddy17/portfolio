import { ArrowRight } from "lucide-react";
import SocialLinks from "./SocialLinks";

function Hero({ data, socialLinks }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-hero-grid" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 dark:border-primary-900/70 dark:bg-primary-950/50 dark:text-primary-300">
            Engineering Student • ML Focus
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {data.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-slate-700 dark:text-slate-200">
            {data.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download="Rakshith_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-600 px-6 py-3 text-sm font-semibold text-primary-600 transition hover:-translate-y-0.5 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-slate-900"
            >
              Download Resume
              <ArrowRight size={18} />
            </a>
          </div>

          <SocialLinks links={socialLinks} className="mt-8" />
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/20 to-cyan-400/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
            <div className="grid gap-4 sm:grid-cols-3">
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
                >
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-slate-100 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300">Current Focus</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>Designing intelligent products with machine learning workflows</li>
                <li>Building responsive frontends for technical project showcases</li>
                <li>Learning deployment, experimentation, and production-ready AI systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
