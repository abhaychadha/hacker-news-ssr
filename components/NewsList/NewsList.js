import Link from 'next/link';
import { ListItem } from '../ListItem/ListItem';
import { Container } from 'react-bootstrap';

export const NewsList = ({ stories }) => {
  return (<Container fluid={'sm'} style={{ marginLeft: 0, marginRight: 0, minWidth: '100%' }}>
    {stories.hits.map((story, index) => (
      <ListItem key ={`item_${index}`} newsItem = {story} index={index + 1} />
    ))}
  </Container>);
};
