import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 px-6 py-5 sticky top-0 bg-slate-950/80 backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            AY<span className="text-blue-400">.</span>
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="py-24 md:py-36">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6">
            👋 Hello, I'm Anji Yarra
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            AWS Cloud &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              DevOps Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I build scalable cloud infrastructure, automate deployments, and
            design reliable Kubernetes platforms 
            turning complex infrastructure
            into simple, repeatable systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
            >
              View Projects →
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3.5 border border-slate-700 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { number: "4+", label: "Years Experience" },
            { number: "25+", label: "Projects Delivered" },
            { number: "50+", label: "Cloud Deployments" },
            { number: "99.9%", label: "Uptime Achieved" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-slate-800 rounded-2xl p-6 bg-slate-900/50 hover:border-blue-500/50 transition-all text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>

            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Roboshop on EKS",
                tech: "Terraform · Docker · Kubernetes",
                tag: "Kubernetes",
              },
              {
                title: "AWS Three-Tier Infra",
                tech: "Terraform · VPC · RDS · ALB",
                tag: "Infrastructure",
              },
              {
                title: "CI/CD Pipeline",
                tech: "Jenkins · Docker · ArgoCD · EKS",
                tag: "CI/CD",
              },
            ].map((proj, i) => (
              <Link
                key={i}
                href="/projects"
                className="group border border-slate-800 rounded-2xl p-6 bg-slate-900/30 hover:bg-slate-900/60 hover:border-blue-500/50 transition-all"
              >
                <span className="text-xs bg-blue-500/15 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-medium">
                  {proj.tag}
                </span>

                <h3 className="text-lg font-bold mt-4 mb-2 group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-500">{proj.tech}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills Strip */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Core Skills</h2>

            <Link
              href="/skills"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "AWS",
              "Kubernetes",
              "Terraform",
              "Docker",
              "Jenkins",
              "Ansible",
              "Linux",
              "Python",
              "Helm",
              "ArgoCD",
              "Prometheus",
              "Grafana",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-slate-700 text-gray-300 rounded-xl text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24">
          <div className="border border-slate-700/50 rounded-3xl p-10 md:p-16 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open to New Opportunities
            </h2>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Looking for a DevOps or Cloud Engineer? Let's talk about how I can
              help your team ship faster and more reliably.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:anjiyarra.aws@gmail.com"
                className="px-7 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
              >
                Send Email
              </a>

              <a
                href="https://linkedin.com/in/anjiyarra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-slate-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 px-6 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 Anji Yarra</p>
      </footer>
    </div>
  );
}