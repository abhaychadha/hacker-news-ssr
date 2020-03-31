import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const StyledRow = styled(Row)`
  background: ${props => props.index % 2 === 0 ? '#f7f0d6' : '#fdf0be'}
`;
export const StyledCountLabel = styled.span`
  font-size: 14px;
  margin: 4px;
  color: ${props => props.upvoted ? 'red' : '#757575'};
`;

export const StyledTitle = styled.span`
  font-size: 14px;
  color: black;
  margin: 4px;
  font-weight: bold;
`;

export const StyledInfo = styled.span`
  font-size: 12px;
  color: ${props => props.dark ? 'black' : '#757575'};;
`;

export const StyledArrowUp = styled.div`
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  display: inline-block;
  border-bottom: 5px solid #757575;
  margin: 4px;
  cursor: pointer;
`;
