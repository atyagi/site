import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import InfoBlock from "components/ui/InfoBlock";
import Container from "components/ui/Container";
import TitleSection from "components/ui/TitleSection";
import { IconProps } from "components/ui/Icon";

import { SectionTitle } from "helpers/definitions";

import * as Styled from "./styles";

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
      link: string;
    };
  };
}

const ConctactInfo: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
              link
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;

  return (
    <Styled.Contact>
      <Container section>
        <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center/>
        {contacts.map((item) => {
          const {
            id,
            frontmatter: { title, icon, content, link }
          } = item.node;

          return (
            <Styled.ContactInfoItem key={id}>
              <InfoBlock icon={icon} title={title} content={content} center link={link}/>
            </Styled.ContactInfoItem>
          );
        })}
      </Container>
    </Styled.Contact>
  );
};

export default ConctactInfo;
