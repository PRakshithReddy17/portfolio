import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function SocialLinks({ links, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {links.map((link) => {
        const Icon = iconMap[link.label];

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-primary-400 dark:hover:text-primary-300"
          >
            {Icon ? <Icon size={16} /> : null}
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
