import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import App from './App';

describe('App', () => {
  const initialState = { state: 200 };
  const mockStore = configureStore();
  let store; let
    container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<App store={store} />);
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const routes = ['one', 'two'];
    const component = shallow(<App routes={routes} />);
    expect(component).toMatchSnapshot();
  });

  it('Render the connected(SMART) component', () => {
    expect(container.length).toEqual(1);
  });

  it('Check Prop matches with initialState', () => {
    expect(container.prop('output')).toEqual(initialState.output);
  });
});
