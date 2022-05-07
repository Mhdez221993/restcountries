import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signin from './Sigin';
import { setResponse } from './siginSlice';

describe('Signin', () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Provider store={store}><Signin /></Provider>)
  })


  it('+++ render the connected component', () => {
    expect(wrapper.find(Signin

    ).length).toEqual(1)
  });

  it('Check action on dispatching ', () => {
    let action
    store.dispatch(setResponse(200));

    action = store.getActions();
    expect(action[0].type).toBe("signin/setResponse");
  });
});
