import counterReducer, { setResponse } from './siginSlice';

describe('counter reducer', () => {
  const initialState = {
    message: 'successfully created',
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, setResponse());
    expect(actual.value).toEqual(4);
  });
});
