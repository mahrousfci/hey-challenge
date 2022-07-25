import styled from 'styled-components';
import theme from '../theme';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f3f6f9;
  padding: ${theme.spacing(4)} ${theme.spacing(7)};
`;

export default Header;
