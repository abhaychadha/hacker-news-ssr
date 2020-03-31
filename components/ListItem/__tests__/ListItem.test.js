import React from 'react';
import { shallow, mount } from 'enzyme';
import { ListItem } from '../ListItem';
import { StyledArrowUp } from '../ListItem.styles';
import initStories from '../../../static/initStories';

describe('ListItem', () => {
  it('List item should render correctly in "debug" mode', () => {
    const component = shallow(<ListItem newsItem = {initStories.hits[0]} index={1} />);
    expect(component).toMatchSnapshot();
  });

  it('upvote arrow is clicked and upvotes and updated', () => {
    // mockTryGetValue.mockReturnValueOnce(true);
    const component = mount(<ListItem newsItem = {initStories.hits[0]} index={1}/>);
    component.find(StyledArrowUp).simulate('click');
    const pointsUpdatedComponent = component.findWhere(n => n.prop('upvoted') === true);
    expect(pointsUpdatedComponent).toHaveLength(1);
  });
});