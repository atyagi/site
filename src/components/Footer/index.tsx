import React from "react";
import Icon from 'components/ui/Icon';
import { faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import Container from "components/ui/Container";

import * as Styled from "./styles";

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Icon icon={faGithub} />
        <Styled.Link
          href="https://github.com/atyagi"
          rel="noreferrer noopener"
          target="_blank"
        >
          Github
        </Styled.Link>
        <Icon icon={faTwitter} />
        <Styled.Link
          href="https://twitter.com/ankittya/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Icon icon={faLinkedin} />
        <Styled.Link
          href="https://www.linkedin.com/in/antyagi/"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
