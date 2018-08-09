import keyMirror from 'fbjs/lib/keyMirror';

export const FETCHING_DATA= 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const ActionTypes = keyMirror({
    USER_LOGIN_REQUEST: undefined,
    USER_LOGIN_SUCCESS: undefined,
    USER_LOGIN_FAILURE: undefined,
    USER_LOGOUT_REQUEST: undefined,
    USER_LOGOUT_SUCCESS: undefined,
    USER_LOGOUT_FAILURE: undefined,
    SHOW_ALERT: undefined,
    HIDE_ALERT: undefined,
    FETCH_LIBRARY: undefined,
    LIBRARY_FETCH_SUCCESS: undefined,
    UPDATE_LIBRARY: undefined,
    LIBRARY_STATUS: undefined,
    PLAYBACK_INIT: undefined,
    PLAYBACK_STATE: undefined,
    NAVIGATE_TO: undefined,
  });

