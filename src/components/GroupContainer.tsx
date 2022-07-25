import styled from 'styled-components';
import theme from '../theme';

const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(8)} ${theme.spacing(10)};
  font-weight: 700;
  background: #f1fafe;
  border-radius: 10px;
`;

export default GroupContainer;
