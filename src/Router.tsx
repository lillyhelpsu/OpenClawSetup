import React, { useState, useEffect } from 'react';
import App from './App';
import Pricing from './Pricing';

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle message from pricing page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'scrollToForm') {
        // Navigate to home and scroll to form
        setCurrentPath('/');
        setTimeout(() => {
          const formElement = document.querySelector('[data-form]');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Simple client-side routing
  const renderPage = () => {
    // Handle GitHub Pages base path
    const basePath = '/OpenClawSetup';
    const path = currentPath.replace(basePath, '') || '/';
    
    switch (path) {
      case '/pricing':
      case '/pricing/':
        return <Pricing />;
      default:
        return <App />;
    }
  };

  return renderPage();
}

// Helper function to navigate
export const navigate = (path: string) => {
  const basePath = '/OpenClawSetup';
  const fullPath = basePath + path;
  window.history.pushState({}, '', fullPath);
  window.dispatchEvent(new PopStateEvent('popstate'));
};