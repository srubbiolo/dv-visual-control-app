import { 
        DATA_LOADED,
        SELECT_VIDEO,
        PLAY_STATUS_CHANGE,
        VOLUME_CHANGE,
        BRIGHT_CHANGE,
        CONTRAST_CHANGE,
        API } from '../constants/app-state.constants';

export function setVideo(payload) {
    return { type: SELECT_VIDEO, payload }
};

export function setPlayStatus(payload) {
  return { type: PLAY_STATUS_CHANGE, payload }
};

export function setVolume(payload) {
  return { type: VOLUME_CHANGE, payload }
};

export function setBright(payload) {
  return { type: BRIGHT_CHANGE, payload }
};

export function setContrast(payload) {
  return { type: CONTRAST_CHANGE, payload }
};

//TODO make this async await. Also possibly make function clean function, use param to set API otherwise anti-pattern here
export function getData() {
  return function(dispatch) {
    return fetch(API)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json.data.results });
      });
  };
}