import { combineReducers } from 'redux';

const defaultState = {
    padOn: true,
    soundPlayed: ""
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

//Reducer for displaying the sound that was played
const displaySoundReducer = (state = defaultState, action) => {
    
    switch (action.type){
        case 'DISPLAY_SOUND':
            state = {...state, soundPlayed: action.message};
            return state;
            
        default: 
            return defaultState;
    }
};

const rootReducer = combineReducers({
    turnDrumPadOn: ioReducer,
    showSound: displaySoundReducer
});
export default rootReducer;
