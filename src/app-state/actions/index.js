import { 
        DATA_LOADED,
        PLAY_STATUS_CHANGE,
        VOLUME_CHANGE,
        BRIGHT_CHANGE,
        CONTRAST_CHANGE,
        API } from '../constants/app-state.constants';


export function setPlayStatus() {
  return { type: PLAY_STATUS_CHANGE }
};

export function setVolume(payload) {
  return { type: VOLUME_CHANGE, payload }
};

export function setBrightness(payload) {
  return { type: BRIGHT_CHANGE, payload }
};

export function setContrast(payload) {
  return { type: CONTRAST_CHANGE, payload }
};

//TODO: Make function a clean function, use param to set API otherwise anti-pattern here.
export function getData() {
  return async function(dispatch) {
    const response = await fetch(API);
    const json = await response.json();
    return dispatch({ type: DATA_LOADED, payload: json.categories[0].videos });
  };
}