'use client';

import Link from 'next/link';

export default function ChronoSyncPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="border-b border-foreground/20 py-16 pt-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-4">Chronosync</h1>
          <p className="text-2xl text-foreground/80 mb-6">A full-stack solution for synchronizing data across multiple platforms.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert mx-auto">
          <p className="text-lg leading-relaxed mb-8">
            Chronosync is a comprehensive application designed to ensure seamless data synchronization across various user platforms. 
            It addresses the common challenge of maintaining data consistency, whether for personal use or in a collaborative environment. 
            The project involved building both frontend and backend components using modern technologies to create a robust and scalable solution.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Key Features</h2>
          <ul className="space-y-3 text-foreground/80">
            <li>• Real-time data synchronization across multiple platforms</li>
            <li>• Robust backend API built with Express.js</li>
            <li>• Modern Vue.js frontend with responsive design</li>
            <li>• Cross-platform compatibility with C++ and PowerShell integration</li>
            <li>• Secure data handling and conflict resolution</li>
          </ul>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Technical Implementation</h2>
          <p className="text-lg leading-relaxed mb-6">
            The application architecture follows modern full-stack development principles, with a clear separation between 
            frontend and backend concerns. The Vue.js frontend provides an intuitive user interface, while the Express.js 
            backend handles data processing and synchronization logic.
          </p>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Vue.js', 'Express', 'Backend', 'Frontend', 'Web Dev', 'Software Dev', 'C++', 'PowerShell'].map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="px-3 py-1 text-sm border border-foreground/30 bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-center md:col-span-2 text-foreground/70">Project screenshots and demos will be added here.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-block border border-foreground/30 px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}