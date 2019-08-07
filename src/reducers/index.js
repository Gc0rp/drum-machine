import { combineReducers } from 'redux';

const defaultState = {
    padOn: true,
    soundPlayed: ""
};

// Reducer for on and off buttons
const ioReducer = (state = defaultState, action) => {
    switch(action.type) {
    case 'TURNON':
        state = {
            padOn: true,
            message: "ON"
        };
        return state;
        break;
        
    case 'TURNOFF': 
        state = {
            padOn: false,
            message: "ON"
        };
        return state;
        break;
        
    default: 
        return state;
        break;

    };
};

const displaySoundReducer = (state = defaultState, action) => {
    
    switch (action.type){
        case 'DISPLAY_SOUND':
            state = { 
               message: action.message
            };
            return state;
        
        default: 
            return defaultState;
    }
};

const rootReducer = combineReducers({
    ioReducer,
    displaySoundReducer
});
export default rootReducer;
