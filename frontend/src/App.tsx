import React from 'react';
import Layout from './components/Layout/Layout';
import BentoHome from './sections/BentoHome/BentoHome';
import Work from './sections/Work/Work';
import Job from './sections/Job/Job';
import Education from './sections/Education/Education';
import License from './sections/License/License';
import Contact from './sections/Contact/Contact';

const App: React.FC = () => (
  <Layout>
    <BentoHome />
    <Work />
    <Job />
    <Education />
    <License />
    <Contact />
  </Layout>
);

export default App;
