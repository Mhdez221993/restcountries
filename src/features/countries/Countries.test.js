import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Countries from './Countries';
import { setCountries } from './countriesSlice';

describe('Countries', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store; let
    wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><Countries /></Provider>);
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(Countries).length).toEqual(1);
  });

  it('Check action on dispatching ', () => {
    let action;
    store.dispatch(setCountries(200));

    action = store.getActions();
    expect(action[0].type).toBe('countries/setCountries');
  });
});
