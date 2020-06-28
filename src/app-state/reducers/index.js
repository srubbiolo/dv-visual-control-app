import { 
  DATA_LOADED,
  PLAY_STATUS_CHANGE,
  VOLUME_CHANGE,
  BRIGHT_CHANGE,
  CONTRAST_CHANGE } from '../constants/app-state.constants';

const initialState = {
    allVideos: [],
    playStatus: false,
    volume: 0.5,
    bright: 100,
    contrast: 100
};

//TODO: set max and min values to constants
function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
      return Object.assign({}, state, {
          allVideos: state.allVideos.concat(action.payload)
      });
  }

  if (action.type === PLAY_STATUS_CHANGE) {
    return {...state, playStatus: !state.playStatus }
  }

  if (action.type === VOLUME_CHANGE) {
    let newVol = state.volume;
    if (action.payload) {
      if (state.volume < 1) {
        //Nasty JS behaviour on decimals
        newVol = +(state.volume + 0.1).toFixed(12);
      }
    } else {
      if (state.volume > 0) {
        newVol = +(state.volume - 0.1).toFixed(12);
      }
    }
    return {...state, volume: newVol}
  }

  if (action.type === BRIGHT_CHANGE) {
    let newBright = state.bright;
    if (action.payload) {
      if (state.bright < 400) {
        newBright = state.bright + 10
      }
    } else {
      if (state.bright > 0) {
        newBright = state.bright - 10
      }
    }
    return {...state, bright: newBright}
  }

  if (action.type === CONTRAST_CHANGE) {
    let newCon = state.contrast;
    if (action.payload) {
      if (state.contrast < 400) {
        newCon = state.contrast + 10
      }
    } else {
      if (state.contrast > 0) {
        newCon = state.contrast - 10
      }
    }
    return {...state, contrast: newCon}
  }
  
  return state;
};

export default rootReducer;