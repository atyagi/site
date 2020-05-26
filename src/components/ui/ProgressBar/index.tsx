import React from 'react';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  ability: string;
}

const ProgressBar: React.FC<Props> = ({ title, percentage, ability }) => (
  <Styled.ProgressBar>
    <Styled.Content>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Content>
    <Styled.BarWrapper>
      <Styled.Bar percentage={percentage} />
    </Styled.BarWrapper>
  </Styled.ProgressBar>
);

export default ProgressBar;
