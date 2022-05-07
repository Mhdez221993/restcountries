import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const routes = ['one', 'two'];
    const component = shallow(<App routes={routes} />);
    expect(component).toMatchSnapshot();
  });
});
