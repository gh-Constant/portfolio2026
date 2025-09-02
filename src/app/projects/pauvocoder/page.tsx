'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ImageModal from '../../components/ImageModal';
import ProjectDetails from '../../components/ProjectDetails';
import { useTranslation } from '../../contexts/I18nContext';
import { useProjectDetails } from '../../hooks/useProjectDetails';

export default function PauvocoderPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  const { t } = useTranslation();
  const { projectDetails, isLoading } = useProjectDetails();
  const details = projectDetails.pauvocoder;

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
          <h1 className="text-6xl font-bold mb-4">Pauvocoder</h1>
          <p className="text-2xl text-foreground/80 mb-6">An innovative audio processing application with advanced vocoding capabilities</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Main presentation image */}
        <div className="mb-12 text-center relative group">
          <Image 
            src="/images/Pauvocoder/image.webp" 
            alt="Pauvocoder Application Overview" 
            width={1600} 
            height={1000} 
            className="w-full h-auto rounded-lg border border-foreground/20 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImageModal("/images/Pauvocoder/image.webp", "Pauvocoder Application Overview")}
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
            Pauvocoder is an innovative audio processing application that implements advanced vocoding techniques for real-time audio manipulation. 
            The project demonstrates expertise in digital signal processing, audio engineering, and real-time audio processing algorithms.
          </p>
          
          <div className="text-center my-16">
            <div className="inline-block border-2 border-foreground/30 bg-foreground/5 px-8 py-6 rounded-lg shadow-lg">
              <h1 className="text-5xl font-bold mb-0">{t('common.myWork', 'My Work')}</h1>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Technical Implementation</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The application is built using C++ for optimal performance in real-time audio processing. It implements sophisticated algorithms 
            for frequency analysis, spectral manipulation, and audio synthesis. The vocoder engine processes audio signals in real-time, 
            applying various effects and transformations to create unique audio experiences.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Key features include multi-band frequency analysis, real-time spectral processing, customizable vocoding parameters, 
            and low-latency audio processing. The application demonstrates advanced understanding of digital signal processing concepts 
            and audio programming techniques.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">Audio Processing Pipeline</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The audio processing pipeline implements a sophisticated approach to vocoding, utilizing FFT analysis for frequency domain 
            processing and real-time convolution for audio effects. The system is designed for minimal latency while maintaining 
            high-quality audio output.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            The implementation showcases expertise in audio programming, including buffer management, sample rate conversion, 
            and real-time audio streaming. The project demonstrates practical application of theoretical audio processing concepts 
            in a working software solution.
          </p>
          
          <h2 className="text-3xl font-bold mb-6 mt-12">{t('common.technicalSkills', 'Technical Skills Demonstrated')}</h2>
          
          <ul className="list-disc list-inside text-lg leading-relaxed mb-6 space-y-2">
            <li>Advanced C++ programming for audio applications</li>
            <li>Digital Signal Processing (DSP) implementation</li>
            <li>Real-time audio processing and streaming</li>
            <li>Frequency domain analysis and synthesis</li>
            <li>Audio buffer management and optimization</li>
            <li>Low-latency system design</li>
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