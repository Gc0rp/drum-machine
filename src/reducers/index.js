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
        return defaultState;
        break;

    };
};

// Reducer for displaying the sound that was played
const displaySoundReducer = (state = defaultState, action) => {
    
    switch (action.type){
    case 'DISPLAY_SOUND':
        state = {...state, soundPlayed: action.message};
        return state;
            
    default: 
        return defaultState;
    }
};

// Reducer for changing volume

const volumeControl = (state = defaultState, action) => {
    
    switch(action.type){
    case 'CHANGE_VOLUME':
        state = {...state, volumeNumber: action.volumeNumber};
        return state;
    
    default: 
        return defaultState;

    }
};

const rootReducer = combineReducers({
    turnDrumPadOn: ioReducer,
    showSound: displaySoundReducer,
    volumeNumber : volumeControl
});
export default rootReducer;
