import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

function Contact({ data, socialLinks }) {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s connect for internships, collaborations, or project discussions."
          description="This section is ready for your real links and contact details. The current content uses placeholders."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                  <a
                    href={`mailto:${data.email}`}
                    className="mt-1 inline-block text-slate-600 transition hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-300"
                  >
                    {data.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Base</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">Open to remote opportunities and technical collaborations.</p>
                </div>
              </div>
            </div>

            <SocialLinks links={socialLinks} className="mt-8" />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-primary-600 to-sky-500 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">Quick Message</p>
            <h3 className="mt-4 text-3xl font-bold">Ready to work on meaningful engineering problems.</h3>
            <p className="mt-4 max-w-xl leading-7 text-primary-50">
              Replace this placeholder block with your personal call-to-action, internship goals, or a contact form integration when needed.
            </p>
            <a
              href={`mailto:${data.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              <Send size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
