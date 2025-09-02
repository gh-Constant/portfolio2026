'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ImageModal from '../../components/ImageModal';
import ProjectDetails from '../../components/ProjectDetails';
import { useTranslation } from '../../contexts/I18nContext';
import { useProjectDetails } from '../../hooks/useProjectDetails';

export default function ChronoSyncPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const { t } = useTranslation();
  const { projectDetails, isLoading } = useProjectDetails();
  const details = projectDetails.chronosync;

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (isLoading || !details) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground mx-auto mb-4"></div>
          <p className="text-lg">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="border-b border-foreground/20 py-16 pt-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-4">ChronoSync</h1>
          <p className="text-2xl text-foreground/80 mb-6">A modern approach to time management for developers and creative professionals</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Main presentation image */}
        <div className="mb-12 text-center relative group">
          <Image 
            src="/images/chronosync/image.webp" 
            alt="ChronoSync Application Overview" 
            width={1600} 
            height={1000} 
            className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImageModal("/images/chronosync/image.webp", "ChronoSync Application Overview")}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <FiSearch className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t('common.projectDetails', 'Project Details')}</h2>
          <ProjectDetails details={details} />
          
          <h2 className="text-3xl font-bold mb-6">{t('common.projectOverview', 'Project Overview')}</h2>
          <p className="text-lg leading-relaxed mb-8">
            {t('projects.chronosync.overview', 'ChronoSync represents a modern approach to time management, specifically designed for developers and creative professionals. The application seamlessly integrates web and desktop technologies to provide a unified experience across all platforms.')}
          </p>
          
          <div className="text-center my-16">
            <div className="inline-block border-2 border-foreground/30 bg-foreground/5 px-8 py-6 rounded-lg shadow-lg">
              <h1 className="text-5xl font-bold mb-0">{t('common.myWork', 'My Work')}</h1>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">{t('projects.chronosync.sections.architecture.title', 'Architecture')}</h2>
          
          {/* Architecture image */}
          <div className="mb-8 text-center relative group">
            <Image 
              src="/images/chronosync/nx.webp" 
              alt="NX monorepo architecture" 
              width={1000} 
              height={667} 
              className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageModal("/images/chronosync/nx.webp", "NX monorepo architecture")}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black bg-opacity-50 rounded-full p-3">
                <FiSearch className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-sm text-foreground/70 mt-2 italic">Figure 2 : NX monorepo architecture for optimized project management</p>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            {t('projects.chronosync.sections.architecture.content.paragraph1', 'Figure 2 shows a screenshot of the \'packages\' folder from ChronoSync\'s GitHub repository. It contains four directories: desktop, mobile, web, and shared. Each corresponds to a different version of the application (desktop, mobile, and web browser), while the shared folder contains common code used across all platforms. This demonstrates the use of a mono-repository structure - a single project grouping all platforms together, making it easy to share code.')}
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            {t('projects.chronosync.sections.architecture.content.paragraph2', 'As indicated in the caption, this mono-repository was set up using Nx, a tool designed to organize this type of project, and pnpm, a modern package manager used to install, compile, and manage different parts of the application. This structure enables parallel development across multiple platforms while maintaining overall project coherence.')}
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            {t('projects.chronosync.sections.architecture.content.paragraph3', 'This organization demonstrates a solid understanding of multi-platform architecture. Grouping different versions of the application within a single repository allows for code reuse, centralizes business logic, and limits duplication. It also facilitates project scalability and simplifies synchronization between teams or modules. While I\'ve only experienced this architecture in this project, I feel capable of effectively integrating into or contributing to other similarly structured projects.')}
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            {t('projects.chronosync.sections.architecture.content.paragraph4', 'The choice of pnpm over npm or yarn aligns with performance and maintainability goals. In a JavaScript/TypeScript project, the package manager is an essential tool for installing and organizing project libraries. I chose pnpm for its concrete advantages: fast installation, disk space efficiency through symlinks, and better dependency management. This allowed me to effectively manage multiple packages in parallel within a mono-repo environment while maintaining consistent versions. I now consider myself quite proficient in using package managers like pnpm, npm, or bun, having used them in most of my personal and professional projects, particularly when creating websites like task managers.')}
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            {t('projects.chronosync.sections.architecture.content.paragraph5', 'The implementation of the shared package demonstrates a clear intention to optimize project structure. This module contains common functions, types, or models used across all platforms, ensuring uniform logic and reducing errors or inconsistencies. However, I believe I still have room for improvement in using this type of package, particularly when sharing code between different technologies or languages - an aspect I didn\'t explore deeply in this project. On the other hand, regarding general code modularity, I believe I have a good level of expertise. For example, in my \'Power X\' project, a video game developed in Java, I applied the MVC pattern, which helped me better organize the code and make it more readable and maintainable.')}
          </p>
           
           <h2 className="text-3xl font-bold mb-6 mt-12">{t('projects.chronosync.sections.expressApi.title', 'Express.js API Implementation')}</h2>
           
           {/* Express.js API image */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/express.webp" 
               alt="Express.js API for centralized data and service management" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/express.webp", "Express.js API for centralized data and service management")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-black bg-opacity-50 rounded-full p-3">
                 <FiSearch className="w-8 h-8 text-white" />
               </div>
             </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 3: Express.js API for centralized data and service management</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             {t('projects.chronosync.sections.expressApi.content.paragraph1', 'Figure 3 is a screenshot of the appUsage.ts file, a TypeScript file that defines backend routes for the ChronoSync application. This file is part of the API developed with Express.js, a framework for creating web servers with JavaScript. An API (Application Programming Interface) is a set of entry points (called routes) that the client (application on phone, computer, or browser) can use to request data from the server. In this specific case, we observe five routes, each allowing retrieval')} 
             of usage statistics (time spent on each application) according to different periods: daily, weekly, monthly, yearly, and custom. 
             These routes therefore allow the user interface to display charts or summaries according to the period selected by the user.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             The implementation of these five routes demonstrates an understanding of how a REST API works with Express.js. Each route is 
             designed to respond to a specific client request: for example, getting all applications used during a day or over a date range 
             defined by the user. I was able to structure these entry points clearly, grouping them by business logic (here: application usage), 
             which makes the code more readable and easier to maintain. This structuring is essential in a long-term or collaborative project, 
             as it allows other developers to quickly understand the role of each part of the code. My level in using Express.js to create 
             routes is still limited, as this project is the only one where I was able to discover and learn this framework. However, I am 
             capable of understanding and modifying a project that uses this technology without too much difficulty.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             This logical grouping in a single file (appUsage.ts) also illustrates good backend organization around a single business concept. 
             This facilitates the implementation of global controls, such as user authentication verification or parameter validation, which 
             can apply to all routes without code duplication. This modular approach improves code maintainability in the long term. As we 
             have seen in other projects I have presented in this portfolio, such as Power X with the MVC model, I think I master the modular 
             approach when developing in most languages.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             The use of dynamic parameters, particularly for the custom route, shows an ability to design flexible routes capable of responding 
             to complex requests. In this route, the client can for example send two specific dates, and the server will return only the data 
             corresponding to this interval. This gives the user great freedom in consulting their statistics, while keeping unified logic on 
             the server side. My level in managing custom parameters in an API, as with APIs in general, is still limited, due to a lack of 
             varied practical experiences.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             Finally, the fact that this backend serves a multi-platform application (web, desktop, mobile) shows that I was able to design 
             a coherent API for heterogeneous clients. All platforms consume the same routes, which guarantees that data is uniform and 
             synchronized, regardless of the medium used by the user. This ability to design a central data point for multiple interfaces 
             is a real advantage in cross-platform projects.
           </p>
           
           <h2 className="text-3xl font-bold mb-6 mt-12">Database Architecture</h2>
           
           {/* Database image */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/database.webp" 
               alt="Database architecture and data management system" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/database.webp", "Database architecture and data management system")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-black bg-opacity-50 rounded-full p-3">
                 <FiSearch className="w-8 h-8 text-white" />
               </div>
             </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 4: Database architecture and data management system</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             Figure 4 shows one of the database versions used in the ChronoSync project, represented through a relational schema visualization tool (ChartDB). A relational database is a structured storage system where information is organized in tables (similar to Excel sheets) connected through logical relationships, allowing data to be structured and interconnected coherently.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             This representation illustrates the overall project architecture: users, the applications they use, their screen time, recorded tasks, as well as task types. It also includes support for two authentication modes — either email/password or OAuth (login via third-party services like Google or GitHub). This structure efficiently meets ChronoSync&apos;s functional needs while remaining scalable and maintainable.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             This modeling reflects a good mastery of relational databases, an essential skill in any project handling user data. I was able to identify key entities, define their attributes (username, usage duration, task category, etc.), and especially design the necessary relationships for their interconnection. A well-designed database ensures information consistency, avoids duplicates, and simplifies complex queries. It also makes future developments easier to integrate. My level in relational modeling is satisfactory: I can design, structure, and evolve a database while ensuring its maintainability. I had the opportunity to develop these skills particularly during my first year of BUT, as well as in projects like a homework manager, structured around a database for users and tasks to complete.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             The integration of two authentication modes demonstrates an understanding of modern identity requirements. Allowing users to choose their login method without complicating the backend architecture requires adapting the user data model to handle multiple types of identifiers. I used Passport.js, an authentication management middleware for Node.js, to implement this logic in the project. My level remains intermediate on this subject, as I have only experimented with one tool in a constrained context so far. However, I am aware that other solutions exist adapted to other contexts, such as NextAuth.js for Next.js projects or Auth.js more generally.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             The database is also designed to store temporal data regarding application usage. Each event records which applications were used, when, and for how long. This structuring raises issues of granularity, performance, and long-term retention. Designing a &quot;traceability&quot;-oriented database is particularly important for projects focused on behavior or productivity analysis. On this point, I acknowledge some remaining gaps. To date, no definitive solution has been implemented regarding archiving or optimization of historical data. I am considering, for example, a compression or aggregation strategy for old data (beyond 6 months), allowing to reduce the level of detail while preserving global statistics. This reflection is ongoing and represents a clear improvement axis in my skills for managing large volumes of data.
           </p>
           
           <h2 className="text-3xl font-bold mb-6 mt-12">Web & Desktop Authentication</h2>
           
           {/* Web login interface */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/login.webp" 
               alt="Web login interface with modern authentication system" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/login.webp", "Web login interface with modern authentication system")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-black bg-opacity-50 rounded-full p-3">
                 <FiSearch className="w-8 h-8 text-white" />
               </div>
             </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 5: Web login interface with modern authentication system</p>
           </div>
           
           {/* Authentication code */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/loginuser.webp" 
               alt="Part of the code executed after authentication" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/loginuser.webp", "Part of the code executed after authentication")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-black bg-opacity-50 rounded-full p-3">
                 <FiSearch className="w-8 h-8 text-white" />
               </div>
             </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 6: Part of the code executed after authentication</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             The web login interface offers a modern and intuitive authentication experience with responsive design and secure credential management.
           </p>
           
           <h3 className="text-2xl font-bold mb-6 mt-8">Desktop Application</h3>
           
           {/* Desktop login screen */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/logindesktop.webp" 
               alt="Desktop application login screen" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/logindesktop.webp", "Desktop application login screen")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-black bg-opacity-50 rounded-full p-3">
                 <FiSearch className="w-8 h-8 text-white" />
               </div>
             </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 7: Desktop application login screen</p>
           </div>
           
           {/* URI request demonstration */}
           <div className="mb-8 text-center">
             <video 
               src="/images/chronosync/URIrequest.mp4" 
               controls
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20"
             >
               Your browser does not support the video tag.
             </video>
             <p className="text-sm text-foreground/70 mt-2 italic">Figure 8: URI request demonstration showing authentication token generation and management</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             The desktop application features a native login screen that integrates perfectly with the operating system while maintaining the same security standards as the web version.
           </p>
           
           <p className="text-lg leading-relaxed mb-6">
             The authentication system demonstrates how URI requests handle token generation and management for secure desktop application access.
           </p>
           
           {/* Email notification system */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/email.webp" 
               alt="Email notification system for project updates and reminders" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/email.webp", "Email notification system for project updates and reminders")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <FiSearch className="w-8 h-8 text-white" />
                </div>
              </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Email notification system for project updates and reminders</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             The application provides a comprehensive dashboard for time tracking, project management, and productivity analysis. Users can easily switch between web and desktop interfaces while maintaining synchronized data.
           </p>
           
           <h3 className="text-2xl font-bold mb-6 mt-8">Advanced Algorithms</h3>
           
           {/* Blur detection algorithm */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/blurryAlgo.webp" 
               alt="Blur detection algorithm for focus tracking and productivity measurement" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/blurryAlgo.webp", "Blur detection algorithm for focus tracking and productivity measurement")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <FiSearch className="w-8 h-8 text-white" />
                </div>
              </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Blur detection algorithm for focus tracking and productivity measurement</p>
           </div>
           
           {/* Session closure algorithm */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/closeAlgo.webp" 
               alt="Session closure algorithm for automatic time tracking and data preservation" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/closeAlgo.webp", "Session closure algorithm for automatic time tracking and data preservation")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <FiSearch className="w-8 h-8 text-white" />
                </div>
              </div>
             <p className="text-sm text-foreground/70 mt-2 italic">Session closure algorithm for automatic time tracking and data preservation</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             ChronoSync implements sophisticated algorithms for time optimization and productivity analysis, including blur detection for focus tracking and intelligent session management.
           </p>
           
           <h3 className="text-2xl font-bold mb-6 mt-8">Integrations</h3>
           
           {/* ClickUp integration */}
           <div className="mb-8 text-center relative group">
             <Image 
               src="/images/chronosync/clickup.webp" 
               alt="ClickUp integration for seamless project management workflow" 
               width={1000} 
               height={667} 
               className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
               onClick={() => openImageModal("/images/chronosync/clickup.webp", "ClickUp integration for seamless project management workflow")}
             />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black bg-opacity-50 rounded-full p-3">
                  <FiSearch className="w-8 h-8 text-white" />
                </div>
              </div>
             <p className="text-sm text-foreground/70 mt-2 italic">ClickUp integration for seamless project management workflow</p>
           </div>
           
           <p className="text-lg leading-relaxed mb-6">
             The platform integrates seamlessly with popular project management tools and provides comprehensive API access for custom workflows and third-party applications.
           </p>
         </div>
          
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('common.technologiesUsed', 'Technologies Used')}</h3>
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
            {t('common.backToPortfolio', '← Back to Portfolio')}
          </Link>
        </div>
      </main>
      
      {/* Image Modal */}
      <ImageModal 
        imageUrl={selectedImage ? selectedImage.src : null}
        altText={selectedImage ? selectedImage.alt : ''}
        onClose={closeImageModal}
      />
    </div>
  );
}