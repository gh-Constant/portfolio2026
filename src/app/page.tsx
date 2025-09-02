import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Home() {
  const projects = [
    {
      href: '/projects/chronosync',
      title: "Chronosync",
      description: "A full-stack solution for synchronizing data across multiple platforms.",
      skills: ["Vue.js", "Express", "Backend", "Frontend", "Web Dev", "Software Dev", "C++", "PowerShell"]
    },
    {
      href: '/projects/pauvocoder',
      title: "Pauvocoder",
      description: "An innovative audio processing application with advanced vocoding capabilities.",
      skills: ["Audio Processing", "Signal Processing", "C++", "Digital Audio", "Real-time Processing"]
    },
    {
      href: '/projects/puissancex',
      title: "PuissanceX",
      description: "A powerful Connect Four game implementation with advanced AI and strategic gameplay.",
      skills: ["Game Development", "AI", "Algorithm", "Strategy", "C++", "Game Logic"]
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Chart.js", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "PostgreSQL", "Socket.io"],
    "Tools & Others": ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack", "Linux", "Agile", "C++", "PowerShell", "Weather API"]
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <header className="border-b border-foreground/20 py-16 pt-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-4">Constant Suchet</h1>
          <p className="text-2xl text-foreground/80 mb-6">Full Stack Developer</p>
          <p className="mt-6 text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating clean, efficient, and user-friendly web applications. 
            I enjoy solving complex problems and turning ideas into reality through code.
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link href={project.href} key={index}>
                <div className="border border-foreground/20 p-6 hover:border-foreground/40 transition-colors h-full">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 border-t border-foreground/20">
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
      <section id="contact" className="py-16 border-t border-foreground/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
             I&apos;m always interested in new opportunities and collaborations. 
             Feel free to reach out if you&apos;d like to work together.
           </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a 
              href="mailto:constantsuchet@gmail.com" 
              className="flex items-center gap-3 border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              <FiMail />
              Email
            </a>
            <a 
              href="https://github.com/gh-Constant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              <FiGithub />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/constant-suchet-031145213/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-foreground/60">
          <p>&copy; 2024 Constant Suchet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
