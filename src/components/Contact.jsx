import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

// ✅ Paste your Web3Forms access key below (get it free at https://web3forms.com)
const WEB3FORMS_KEY = "a6f0ab52-e661-483e-9daa-c6368b42bf7c";

function Contact({ data, socialLinks }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s connect for internships, collaborations, or project discussions."
          description="Feel free to reach out — I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — Info Card */}
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
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    Open to remote opportunities and technical collaborations.
                  </p>
                </div>
              </div>
            </div>

            <SocialLinks links={socialLinks} className="mt-8" />
          </div>

          {/* Right — Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">
              Quick Message
            </p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send me a message
            </h3>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-primary-400"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-primary-400"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</span>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-primary-400"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-primary-400"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/25 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" && (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={18} />
                  Failed — Try Again
                </>
              )}
              {status === "idle" && (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
