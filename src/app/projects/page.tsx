export default function Projects() {
  const projects = [
    {
      title: "Roboshop on Amazon EKS",
      description:
        "Production-ready microservices e-commerce app deployed on AWS EKS using Terraform, Helm charts, and Kubernetes best practices. Includes HPA, PV/PVC, EBS CSI, and EFS CSI drivers.",
      tech: ["Terraform", "Docker", "EKS", "Helm", "Kubernetes", "HPA", "Prometheus"],
      github: "https://github.com/anji-yarra/roboshop-kubernetes",
      category: "Kubernetes",
      highlight: "Production Grade",
    },
    {
      title: "AWS Three-Tier Infrastructure",
      description:
        "Fully automated three-tier AWS architecture with VPC, public/private subnets, Application Load Balancer, Auto Scaling Groups, RDS, and Route53 — all managed via Terraform.",
      tech: ["Terraform", "AWS", "VPC", "EC2", "ALB", "Route53", "RDS", "IAM"],
      github: "https://github.com/anji-yarra/aws-three-tier",
      category: "Infrastructure",
      highlight: "IaC Automated",
    },
    {
      title: "End-to-End CI/CD Pipeline",
      description:
        "Complete CI/CD pipeline from code commit to production deployment using Jenkins, Docker, ECR, and EKS with blue-green deployment strategy and SonarQube code quality checks.",
      tech: ["Jenkins", "GitHub Actions", "Docker", "ECR", "EKS", "ArgoCD", "SonarQube"],
      github: "https://github.com/anji-yarra/cicd-pipeline",
      category: "CI/CD",
      highlight: "Blue-Green Deploy",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 px-6 py-4 sticky top-0 bg-slate-950/95 backdrop-blur-sm z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Anji Yarra
          </a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/projects" className="text-white font-medium">Projects</a>
            <a href="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 font-semibold mb-2 text-sm uppercase tracking-widest">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real-world infrastructure and DevOps projects built and deployed on AWS. Each project solves a genuine production challenge.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-slate-700/50 rounded-2xl p-8 bg-slate-900/30 hover:bg-slate-900/60 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Left: Content */}
                <div className="flex-1">
                  {/* Badges */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full font-medium">
                      {project.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 text-gray-300 border border-slate-700 px-3 py-1 rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: GitHub Link */}
                <div className="flex md:flex-col items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border border-slate-700/50 rounded-2xl p-10 bg-slate-900/30">
          <h2 className="text-2xl font-bold mb-3">Want to see more?</h2>
          <p className="text-gray-400 mb-6">Visit my GitHub for all projects and open source contributions.</p>
          <a
            href="https://github.com/anji-yarra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-semibold"
          >
            View GitHub Profile →
          </a>
        </div>

        {/* Back */}
        <div className="mt-10">
          <a href="/" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
            ← Back to Home
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-800 px-6 py-8 mt-20 text-center text-gray-500 text-sm">
        <p>© 2026 Anji Yarra. All rights reserved.</p>
      </footer>
    </div>
  )
}