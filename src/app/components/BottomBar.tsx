'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/I18nContext';

const BottomBar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const frenchTime = now.toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(frenchTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 text-white" style={{ mixBlendMode: 'difference' }}>
      <div className="max-w-full mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center text-base">
          <div className="justify-self-start">
            {t('footer.email', 'constantsuchet@gmail.com')}
          </div>
          <div className="font-medium justify-self-center">
            {t('footer.location', 'FRANCE')}
          </div>
          <div className="font-mono justify-self-end">
            {currentTime} {t('footer.timezone', 'GMT+1')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;