import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Posts from 'components/Posts'
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <hr />
      {/*  TODO: put some featured posts here*/}
    </Layout>
  );
};

export default IndexPage;
