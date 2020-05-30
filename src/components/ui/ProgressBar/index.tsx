import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
}

const ProgressBar: React.FC<Props> = ({ title, ability }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Ability>{ability}</Styled.Ability>
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar ability={ability} />
    </Styled.BarWrapper>
  </Styled.ProgressBar>
);

export default ProgressBar;
