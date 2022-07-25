import styled from 'styled-components';
import theme from '../../theme';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  > * {
    margin-left: ${theme.spacing(4)};
  }
`;

export default FilterContainer;
