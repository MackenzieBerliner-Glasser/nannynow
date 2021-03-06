import reducer from './session';
import { fakeUser } from './fixtures/fakeUser';
import { fakeProfile } from './fixtures/fakeProfile';
import { SESSION_CREATE, SESSION_TOKEN } from '../actions/session';
import { LOAD_START, LOAD_END } from '../actions/fixtures/loadingActions';
import { PROFILE_UPDATE, PROFILE_CREATE } from '../actions/profile';

jest.mock('../services/authApi.js');
jest.mock('../services/profileApi.js');

describe('session reducer', () => {
  const initialState = {
    user: null,
    token: '',
    loading: false,
    error: null
  };

  it('creates a new user in session on SESSION_CREATE', () => {
    const action = { type: SESSION_CREATE, payload: fakeUser };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({
      ...initialState,
      user: fakeUser.user,
      profile: fakeUser.profile
    });
  });

  it('starts loading on session on LOAD_START', () => {
    const action = { type: LOAD_START };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, loading: true });
  });

  it('stops loading on session on LOAD_END', () => {
    const action = { type: LOAD_END };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, loading: false });
  });

  it('sets token on SESSION_TOKEN', () => {
    const action = { type: SESSION_TOKEN, payload: '1234' };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, token: '1234' });
  });

  it('updates a user profile on PROFILE_UPDATE', () => {
    const action = { type: PROFILE_UPDATE, payload: fakeProfile };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, profile: fakeProfile });
  });

  it('creates a user profile on PROFILE_CREATE', () => {
    const action = { type: PROFILE_CREATE, payload: fakeProfile };
    const updatedState = reducer(initialState, action);
    expect(updatedState).toEqual({ ...initialState, profile: fakeProfile });
  });
});
