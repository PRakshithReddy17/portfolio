function Footer({ data }) {
  return (
    <footer className="border-t border-slate-200 px-4 py-8 sm:px-6 lg:px-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 dark:text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} {data.name}. Built for an engineering student portfolio.
        </p>
        <div className="flex items-center gap-4">
          <a href={data.github} target="_blank" rel="noreferrer" className="transition hover:text-primary-600 dark:hover:text-primary-300">
            GitHub
          </a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-primary-600 dark:hover:text-primary-300">
            LinkedIn
          </a>
          <a href={`mailto:${data.email}`} className="transition hover:text-primary-600 dark:hover:text-primary-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
