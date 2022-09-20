import styled from 'styled-components';

export const StyledMessage = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 10px;
  color: ${p => p.theme.colors.text.primaryText};
`;
