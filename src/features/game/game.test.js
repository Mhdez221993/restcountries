import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Game from './Game';
import { decrement, increment } from './gameSlice';

describe('Game', () => {
  const initialState = { coins: 10 };
  const mockStore = configureStore();
  let store; let
    wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Provider store={store}><Game /></Provider>);
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(Game).length).toEqual(1);
  });

  it('Check action on dispatching ', () => {
    let action;
    store.dispatch(increment(2));

    action = store.getActions();
    expect(action[0].type).toBe('game/increment');
  });

  it('Check action on dispatching ', () => {
    let action;
    store.dispatch(decrement(2));

    action = store.getActions();
    expect(action[0].type).toBe('game/decrement');
  });
});
