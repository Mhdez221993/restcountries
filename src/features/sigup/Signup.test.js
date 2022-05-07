/* eslint-disable prefer-const */
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signup from './Signup';
import { setResponse } from './signupSlice';

describe('Signup', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store; let
    wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><Signup /></Provider>);
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(Signup).length).toEqual(1);
  });

  it('Check action on dispatching ', () => {
    let action;
    store.dispatch(setResponse(200));

    action = store.getActions();
    expect(action[0].type).toBe('signup/setResponse');
  });
});
