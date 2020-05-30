import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';
import Certificate from 'components/ui/Certificate';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Skills />
    <hr />
    <Certificate />
  </Layout>
);

export default ResumePage;
