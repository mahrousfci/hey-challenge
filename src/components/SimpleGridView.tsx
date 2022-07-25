import styled from 'styled-components';
import theme from '../theme';

const SimpleGridView = styled.table`
  caption-side: top;
  border: none;
  width: 100%;
  padding: 0 ${theme.spacing(8)};

  td,
  th {
    border: none;
    text-align: center;
    padding: 5px 10px;
  }

  td:first-child,
  th:first-child {
    text-align: left;
  }

  td:last-child,
  th:last-child {
    text-align: right;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #f1fafe;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #ffffff;
  }
`;

export default SimpleGridView;
