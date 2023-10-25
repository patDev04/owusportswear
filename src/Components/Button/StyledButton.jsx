import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  padding: 5px;
  text-transform: uppercase;
  border: solid black 1px;
  cursor: pointer;
  border: solid black 1px;
`;
