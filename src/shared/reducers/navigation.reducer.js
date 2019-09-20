import update from 'immutability-helper'
import {NAVIGATE} from '@app/shared/actions/navigation.action';

const initState = {
    currentScreen: '',
    prevScreen: '',
    
}

const reducer = (state={...initState}, action) => {    
    switch(action.type){
        case NAVIGATE:
            state = update(state, {$merge: {
                currentScreen: action.currentScreen,
                prevScreen: action.prevScreen
            }})
            break;
        default: return state;
    }
    
    return state;
}

export default reducer;