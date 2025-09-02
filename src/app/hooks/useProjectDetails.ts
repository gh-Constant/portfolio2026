import { useState, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';
import { ProjectDetails } from '../components/ProjectDetails';
import enProjectDetails from '../locales/languages/en/projectdetails.json';
import frProjectDetails from '../locales/languages/fr/projectdetails.json';

type ProjectDetailsData = Record<string, ProjectDetails>;

const projectDetailsMap = {
  en: enProjectDetails,
  fr: frProjectDetails
};

export function useProjectDetails() {
  const [projectDetails, setProjectDetails] = useState<ProjectDetailsData>({});
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useI18n();

  useEffect(() => {
    // Don't load if language is not yet available
    if (!language) {
      return;
    }

    const loadProjectDetails = () => {
      try {
        setIsLoading(true);
        const data = projectDetailsMap[language] || projectDetailsMap.en;
        setProjectDetails(data);
      } catch (error) {
        console.error('Error loading project details:', error);
        // Fallback to English
        setProjectDetails(projectDetailsMap.en);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjectDetails();
  }, [language]);

  return { projectDetails, isLoading };
}