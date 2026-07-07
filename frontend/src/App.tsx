import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import BentoHome from './sections/BentoHome/BentoHome';
import BentoAbout from './sections/BentoAbout/BentoAbout';
import Work from './sections/Work/Work';
import Job from './sections/Job/Job';
import Education from './sections/Education/Education';
import License from './sections/License/License';
import Contact from './sections/Contact/Contact';
import { SectionId } from './types/sections';

const App: React.FC = () => {
  const [view, setView] = useState<SectionId>('intro');

  const renderView = () => {
    switch (view) {
      case 'intro':
        return <BentoHome onNavigate={setView} />;
      case 'about':
        return <BentoAbout />;
      case 'work':
        return <Work />;
      case 'job':
        return <Job />;
      case 'education':
        return <Education />;
      case 'license':
        return <License />;
      case 'contact':
        return <Contact />;
      default:
        return <BentoHome onNavigate={setView} />;
    }
  };

  return (
    <Layout currentView={view} onNavigate={setView}>
      {renderView()}
    </Layout>
  );
};

export default App;
