export default function Home() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and inventory management.",
      skills: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"]
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      skills: ["Vue.js", "Chart.js", "Weather API", "CSS3"]
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website showcasing projects and skills with clean design principles.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"]
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs"],
    "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack", "Linux", "Agile"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/20 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">John Developer</h1>
          <p className="text-xl text-foreground/80">Full Stack Developer</p>
          <p className="mt-4 text-foreground/70 max-w-2xl">
            Passionate about creating clean, efficient, and user-friendly web applications. 
            I enjoy solving complex problems and turning ideas into reality through code.
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="border border-foreground/20 p-6 hover:border-foreground/40 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 text-sm border border-foreground/30 bg-foreground/5 hover:bg-foreground/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-foreground/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="text-center">
                <h3 className="text-xl font-semibold mb-6 border-b border-foreground/20 pb-2">{category}</h3>
                <div className="space-y-3">
                  {skillList.map((skill, index) => (
                    <div key={index} className="text-foreground/80 hover:text-foreground transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t border-foreground/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
             I&apos;m always interested in new opportunities and collaborations. 
             Feel free to reach out if you&apos;d like to work together.
           </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="mailto:john@example.com" 
              className="border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/johndeveloper" 
              className="border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/johndeveloper" 
              className="border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-foreground/60">
          <p>&copy; 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
