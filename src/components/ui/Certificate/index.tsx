import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import { SectionTitle } from '../../../helpers/definitions';

interface Certificate {
  node: {
    id: string;
    frontmatter: {
      id: string;
      width?: number;
      height?: number;
      host?: string;
    };
  };
}

const Certificate: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "certificates section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "certificates" } } }) {
        edges {
          node {
            id
            frontmatter {
              id
              width
              height
              host
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const certificates: Certificate[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={''} subtitle={sectionTitle.title} center />
      <Styled.Container>
        {certificates.map((cert) => {
          const { id, frontmatter } = cert.node;

          return (
            <Styled.Cert>
              <div
                id={id}
                data-iframe-width={frontmatter.width}
                data-iframe-height={frontmatter.height}
                data-share-badge-id={frontmatter.id}
                data-share-badge-host={frontmatter.host}
              />
            </Styled.Cert>
          );
        })}
      </Styled.Container>
    </Container>
  );
};

export default Certificate;
