import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  ability: string;
}

export const ProgressBar = styled.div`
  ${tw`p-3`};
`;

export const BarWrapper = styled.div`
  ${tw`w-full h-2 bg-gray-300 rounded overflow-hidden mt-1`};
`;

export const Bar = styled.div<StyledProps>`
  ${tw`h-2 bg-teal-400`};
  width: ${({ ability }) => {
    switch (ability) {
      case 'Beginner':
        return '25%';
      case 'Intermediate':
        return '50%';
      case 'Advanced':
        return '75%';
      case 'Expert':
        return '100%';
      default:
        return '0%';
    }
  }};
`;

export const Content = styled.div`
  ${tw`w-full flex justify-between`};
`;

export const Title = styled.h3`
  ${tw`font-semibold`};
`;

export const Ability = styled.h3`
  ${tw`font-light text-sm`};
`;
