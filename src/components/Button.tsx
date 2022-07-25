import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  padding: 4px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #005b96;
  color: #ffffff;
  text-align: center;
  height: 32px;
  width: 118px;
  border: none;

  &:hover {
    border: 1px solid ${theme.palette.secondary.light};
    color: ${theme.palette.primary.light};
  }

  &:active {
    border: 1px solid ${theme.palette.secondary.dark};
    color: ${theme.palette.primary.dark};
  }
`;

export default Button;
