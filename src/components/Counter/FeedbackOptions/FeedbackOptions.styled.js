import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledItem = styled.li``;

export const StyledButton = styled.button`
  color: ${p => p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: ${p => p.theme.textTransform.cap};
  width: 110px;
  height: 40px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 40px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease 0s;
`;
