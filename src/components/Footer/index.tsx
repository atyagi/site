import React from 'react';
import Icon from 'components/ui/Icon';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Icon icon={faGithub} />
        <OutboundLink href="https://github.com/atyagi" rel="noreferrer noopener" target="_blank">
          Github
        </OutboundLink>
        <Icon icon={faTwitter} />
        <OutboundLink href="https://twitter.com/ankittya/" rel="noreferrer noopener" target="_blank">
          Twitter
        </OutboundLink>
        <Icon icon={faLinkedin} />
        <OutboundLink href="https://www.linkedin.com/in/antyagi/" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </OutboundLink>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
