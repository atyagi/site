import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import PostComponent from 'components/ui/Post';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';
import Loadable from '@loadable/component';

const Carousel = Loadable(() => import('components/ui/Carousel'));

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const FeaturedPosts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "featured section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true }, featured: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Posts>
        <Carousel>
          {posts.map((item) => {
            const {
              id,
              fields: { slug },
              frontmatter: { title, cover, description, date, tags }
            } = item.node;

            return (
              <Styled.PostContainer>
                <PostComponent
                  id={id}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                  cover={cover}
                />
              </Styled.PostContainer>
            );
          })}
        </Carousel>
      </Styled.Posts>
    </Container>
  );
};

export default FeaturedPosts;
