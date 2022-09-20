import styled from 'styled-components';

export const StyledStatList = styled.ul``;

export const StyledStatItem = styled.li`
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: ${p => p.theme.textTransform.cap};
  padding: 8px;
`;
