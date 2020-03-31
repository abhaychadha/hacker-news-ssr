import React from 'react';
import { shallow } from 'enzyme';
import { NewsList } from '../NewsList';
import initStories from '../../../static/initStories';

describe('NewsList', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NewsList stories = {initStories} />);
    expect(component).toMatchSnapshot();
  });
});