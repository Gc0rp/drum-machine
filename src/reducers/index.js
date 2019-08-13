import { combineReducers } from 'redux';

const defaultState = {
    padOn: true,
    soundPlayed: "",
    volumeControl: 0
};

// Reducer for on and off buttons
const ioReducer = (state = defaultState, action) => {
    switch(action.type) {
    case 'TURNON':
        state = {...state, padOn: true};
        return state;
        break;
        
    case 'TURNOFF': 
        state = {...state, padOn: false};
        return state;
        break;
        
    default: 
        
        return state;
        break;

    };
};

// Reducer for displaying the sound that was played
const displaySoundReducer = (state = defaultState, action) => {
    
    switch (action.type){
    case 'DISPLAY_SOUND':
        console.log(action);
        state = {...state, soundPlayed: action.message};
        console.log(state);
        return state;
            
    default:
        console.log("in default"); 
        console.log(state);
        return state;
    }
};

// Reducer for changing volume
const volumeControl = (state = defaultState, action) => {
    
    switch(action.type){
    case 'CHANGE_VOLUME':
        console.log("in change volume");
        state = {...state, volumeControl: action.volumeControl};
        return state;
    
    default: 
        console.log(state);
        return state;
    }
};

const rootReducer = combineReducers({
    turnDrumPadOn: ioReducer,
    showSound: displaySoundReducer,
    volumeNumber : volumeControl
});
export default rootReducer;
