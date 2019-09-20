import update from 'immutability-helper';
import {HOME_SET_LIST} from './home.action'

const initState = {
    list: [

    ]
}
export default (state = initState, action) => {
    switch (action.type) {
        case HOME_SET_LIST:
            state.list = update(state.list, {$set: action.data});
            break;
        default:
            return state;
    }
    return state;
};