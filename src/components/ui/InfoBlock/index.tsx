import React from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: IconProps;
  link: string
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, link }) => (
  <Styled.InfoBlock center={center}>
    <a href={link}>
      <Styled.Icon>
        <Icon icon={icon} />
      </Styled.Icon>
    </a>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;
