import styled from 'styled-components';
import theme from '../theme';

const Avatar = styled.div`
  border-radius: 5px;
  padding: ${theme.spacing(2)};
  background-color: #f6ca65;
  text-align: center;
  vertical-align: top;
  font-size: 23px;
  font-family: Roboto;
  color: #ffffff;
  margin-right: ${theme.spacing(2)};
`;

export default Avatar;
