import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export const ListItem = ({ newsItem, index }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(newsItem.points);
  useEffect(() => {
    if (upvoted) {
      setUpvotes(upvotes + 1);
    }
  }, [upvoted]);
  return (
    <StyledRow key={newsItem.id} index={index}>
      <Col xl={2} md={2} sm={1} className="text-center"><StyledCountLabel>{newsItem.num_comments}</StyledCountLabel></Col>
      <Col xl={10} md={10} sm={5}><StyledCountLabel upvoted={ upvoted }>{upvotes || 0} </StyledCountLabel>
        <StyledArrowUp onClick={() => setUpvoted(true) } ></StyledArrowUp>
        <StyledTitle>{newsItem.title} </StyledTitle>
        <StyledInfo>{` (${getUrlDomain(newsItem.url)}) by`} </StyledInfo>
        <StyledInfo dark={true}>{newsItem._highlightResult.author.value}</StyledInfo>
        <StyledInfo>{` ${timeSince(new Date(newsItem.created_at))}`}</StyledInfo>
      </Col>
    </StyledRow>);
};

const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};

const getUrlDomain = url => url ? url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0] : '';

const StyledRow = styled(Row)`
  background: ${props => props.index % 2 === 0 ? '#f7f0d6' : '#fdf0be'}
`;

export const StyledCountLabel = styled.span`
  font-size: 14px;
  margin: 4px;
  color: ${props => props.upvoted ? 'red' : '#757575'};
`;

const StyledTitle = styled.span`
  font-size: 14px;
  color: black;
  margin: 4px;
  font-weight: bold;
`;

const StyledInfo = styled.span`
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
`;
