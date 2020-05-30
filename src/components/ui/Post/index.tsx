import React from 'react';

import * as Styled from './styles';
import { ImageSharpFluid } from 'helpers/definitions';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';

interface Props {
  id: string;
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  cover: {
    childImageSharp: {
      fluid: ImageSharpFluid;
    };
  };
}

const PostComponent: React.FC<Props> = ({ id, slug, cover, title, date, description, tags }) => {
  return (
    <Styled.Post key={id}>
      <Link to={slug}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
          <Styled.Card>
            <Styled.Image>
              <Img fluid={cover.childImageSharp.fluid} alt={title} />
            </Styled.Image>
            <Styled.Content>
              <Styled.Date>{date}</Styled.Date>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.Content>
            <Styled.Tags>
              {tags.map((item) => (
                <Styled.Tag key={item}>{item}</Styled.Tag>
              ))}
            </Styled.Tags>
          </Styled.Card>
        </motion.div>
      </Link>
    </Styled.Post>
  );
};

export default PostComponent;
