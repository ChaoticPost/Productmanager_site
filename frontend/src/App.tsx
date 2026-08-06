import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import BentoHome from './sections/BentoHome/BentoHome';
import BentoAbout from './sections/BentoAbout/BentoAbout';
import BentoResources from './sections/BentoResources/BentoResources';
import BentoResourceDetail from './sections/BentoResources/BentoResourceDetail';
import ProjectCaseStudy from './sections/ProjectCase/ProjectCaseStudy';
import Work from './sections/Work/Work';
import Job from './sections/Job/Job';
import Education from './sections/Education/Education';
import License from './sections/License/License';
import Contact from './sections/Contact/Contact';
import { SectionId } from './types/sections';
import { bentoCopy, Lang } from './sections/BentoHome/bentoCopy';

interface BackConfig {
  target: SectionId;
  label: string;
}

const getStoredLang = (): Lang => {
  if (typeof window === 'undefined') {
    return 'ru';
  }

  const saved = window.localStorage.getItem('lang');
  return saved === 'en' ? 'en' : 'ru';
};

const App: React.FC = () => {
  const [view, setView] = useState<SectionId>('intro');
  const [resourceProjectId, setResourceProjectId] = useState('benbox');
  const [projectCaseId, setProjectCaseId] = useState('cashless');
  const [projectCaseOrigin, setProjectCaseOrigin] = useState<SectionId>('about');

  const openResourceProject = (projectId: string) => {
    setResourceProjectId(projectId);
    setView('resource-detail');
  };

  const openProjectCase = (projectId: string, origin: SectionId) => {
    setProjectCaseId(projectId);
    setProjectCaseOrigin(origin);
    setView('project-case');
  };

  const lang = getStoredLang();
  const navCopy = bentoCopy[lang];

  const backConfig: BackConfig | undefined = (() => {
    switch (view) {
      case 'about':
        return { target: 'intro', label: navCopy.backHome };
      case 'resources':
        return { target: 'intro', label: navCopy.backHome };
      case 'resource-detail':
        return { target: 'resources', label: navCopy.backProjects };
      case 'project-case':
        return {
          target: projectCaseOrigin,
          label:
            projectCaseOrigin === 'intro'
              ? navCopy.backHome
              : projectCaseOrigin === 'resources'
                ? navCopy.backProjects
                : navCopy.backAbout,
        };
      default:
        return undefined;
    }
  })();

  const renderView = () => {
    switch (view) {
      case 'intro':
        return <BentoHome onNavigate={setView} onOpenProjectCase={(id) => openProjectCase(id, 'intro')} />;
      case 'about':
        return <BentoAbout onOpenProjectCase={(id) => openProjectCase(id, 'about')} />;
      case 'resources':
        return <BentoResources onOpenProjectCase={(id) => openProjectCase(id, 'resources')} />;
      case 'resource-detail':
        return <BentoResourceDetail projectId={resourceProjectId} onNavigate={setView} />;
      case 'project-case':
        return (
          <ProjectCaseStudy
            projectId={projectCaseId}
            onNavigate={setView}
            fallbackView={projectCaseOrigin}
          />
        );
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
        return <BentoHome onNavigate={setView} onOpenProjectCase={(id) => openProjectCase(id, 'intro')} />;
    }
  };

  return (
    <Layout currentView={view} onNavigate={setView} backConfig={backConfig}>
      {renderView()}
    </Layout>
  );
};

export default App;
