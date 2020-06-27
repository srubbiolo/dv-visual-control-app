import { 
  DATA_LOADED,
  SELECT_VIDEO,
  PLAY_STATUS_CHANGE,
  VOLUME_CHANGE,
  BRIGHT_CHANGE,
  CONTRAST_CHANGE } from '../constants/app-state.constants';

const initialState = {
    allVideos: [],
    selectedVideo: {},
    playStatus = false,
    volume = 0.5,
    bright = 1,
    contrast = 1
};

//TODO: set max and min values to constants
function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
      return Object.assign({}, state, {
          allVideos: state.allVideos.concat(action.payload)
      });
  }

  if (action.type === SELECT_VIDEO) {
      return {...state, selectedVideo: {...action.payload} }
  }

  if (action.type === PLAY_STATUS_CHANGE) {
    return {...state, playStatus: !playStatus }
  }

  if (action.type === VOLUME_CHANGE) {
    let newVol = state.volume;
    if (action.payload) {
      if (state.volume < 1) {
        newVol = state.volume + 0.1;
      }
    } else {
      if (state.volume > 0) {
        newVol = state.volume - 0.1;
      }
    }
    return {...state, volume: newVol}
  }

  if (action.type === BRIGHT_CHANGE) {
    let newBright = state.bright;
    if (action.payload) {
      if (state.bright < 2) {
        newBright = state.bright + 0.1;
      }
    } else {
      if (state.bright > 0) {
        newBright = state.bright - 0.1;
      }
    }
    return {...state, bright: newBright}
  }

  if (action.type === CONTRAST_CHANGE) {
    let newCon = state.contrast;
    if (action.payload) {
      if (state.contrast < 2) {
        newCon = state.contrast + 0.1;
      }
    } else {
      if (state.contrast > 0) {
        newCon = state.contrast - 0.1;
      }
    }
    return {...state, contrast: newCon}
  }
  
  return state;
};

export default rootReducer;