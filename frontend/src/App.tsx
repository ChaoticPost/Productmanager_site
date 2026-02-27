import React from 'react';
import Layout from './components/Layout/Layout';
import Intro from './sections/Intro/Intro';
import Work from './sections/Work/Work';
import Job from './sections/Job/Job';
import Education from './sections/Education/Education';
import License from './sections/License/License';
import Contact from './sections/Contact/Contact';

const App: React.FC = () => (
  <Layout>
    <Intro />
    <Work />
    <Job />
    <Education />
    <License />
    <Contact />
  </Layout>
);

export default App;
