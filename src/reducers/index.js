import { combineReducers } from 'redux';

const defaultState = {
    padOn: true
};

const rootReducer = (state = defaultState, action) => {
    switch(action.type) {
    case 'TURNON':
        state = {
            padOn: true
        };
        return state;
        break;
        
    case 'TURNOFF': 
        state = {
            padOn: false
        };
        return state;
        break;
        
    default: 
        return state;
        break;

    };
}

export default rootReducer;
