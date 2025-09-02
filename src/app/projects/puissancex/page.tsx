'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ImageModal from '../../components/ImageModal';
import ProjectDetails from '../../components/ProjectDetails';
import { useTranslation } from '../../contexts/I18nContext';
import { useProjectDetails } from '../../hooks/useProjectDetails';

export default function PuissanceXPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const { t } = useTranslation();
  const { projectDetails, isLoading } = useProjectDetails();
  const details = projectDetails.puissancex;

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
          <h1 className="text-6xl font-bold mb-4">PuissanceX</h1>
          <p className="text-2xl text-foreground/80 mb-6">A powerful Connect Four game implementation with advanced AI and strategic gameplay</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Main presentation image */}
        <div className="mb-12 text-center relative group">
          <Image 
            src="/images/PuissanceX/image.webp" 
            alt="PuissanceX Game Overview" 
            width={1600} 
            height={1000} 
            className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImageModal("/images/PuissanceX/image.webp", "PuissanceX Game Overview")}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <FiSearch className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert mx-auto">
          <h2 className="text-3xl font-bold mb-6">Project Details</h2>
          <ProjectDetails details={details} />
          
          <h2 className="text-3xl font-bold mb-6">{t('common.projectOverview', 'Project Overview')}</h2>
          <p className="text-lg leading-relaxed mb-8">
            PuissanceX is a sophisticated implementation of the classic Connect Four game, featuring advanced artificial intelligence, 
            strategic gameplay mechanics, and a polished user interface. The project demonstrates expertise in game development, 
            algorithm implementation, and software architecture design.
          </p>
          
          <div className="text-center my-16">
            <div className="inline-block border-2 border-foreground/30 bg-foreground/5 px-8 py-6 rounded-lg shadow-lg">
              <h1 className="text-5xl font-bold mb-0">{t('common.myWork', 'My Work')}</h1>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">{t('common.gameArchitecture', 'Game Architecture')}</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The game is built using C++ with a focus on clean architecture and maintainable code. It implements the Model-View-Controller (MVC) 
            pattern to separate game logic, user interface, and control flow. This architectural approach ensures code modularity, 
            testability, and ease of maintenance.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            The game engine handles board state management, move validation, win condition detection, and game flow control. 
            The modular design allows for easy extension of game features and integration of different AI strategies.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Artificial Intelligence Implementation</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            PuissanceX features a sophisticated AI opponent that uses advanced algorithms to provide challenging gameplay. 
            The AI implementation includes minimax algorithm with alpha-beta pruning for optimal move selection, 
            heuristic evaluation functions for position assessment, and adaptive difficulty levels.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            The AI system evaluates board positions using strategic principles such as center control, threat detection, 
            and winning pattern recognition. This creates an engaging opponent that provides appropriate challenge levels 
            for players of different skill levels.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Game Features</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The game includes multiple gameplay modes, including player vs. player, player vs. AI, and AI vs. AI demonstration modes. 
            The user interface provides intuitive controls, visual feedback for moves, and clear indication of game state and outcomes.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Additional features include move history tracking, game statistics, customizable board sizes, and replay functionality. 
            The implementation demonstrates attention to user experience and comprehensive game feature development.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">{t('common.technicalSkills', 'Technical Skills Demonstrated')}</h2>
          
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
            <li>Advanced C++ programming and object-oriented design</li>
            <li>Game development and interactive application design</li>
            <li>Artificial Intelligence algorithms (Minimax, Alpha-Beta pruning)</li>
            <li>Strategic game analysis and heuristic development</li>
            <li>Model-View-Controller (MVC) architecture implementation</li>
            <li>Algorithm optimization and performance tuning</li>
            <li>User interface design and user experience considerations</li>
          </ul>
          
          <div className="mt-12 pt-8 border-t border-foreground/20">
            <Link href="/" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors">
              {t('common.backToPortfolio', '← Back to Portfolio')}
            </Link>
          </div>
        </div>
      </main>
      
      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage.src} 
          altText={selectedImage.alt} 
          onClose={closeImageModal} 
        />
      )}
    </div>
  );
}