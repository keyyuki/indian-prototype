import { combineReducers } from 'redux';
import navigation from '@app/shared/reducers/navigation.reducer';
import homeScreen from '@app/screens/home/home.reducer'

export default combineReducers({
    navigation,
    homeScreen
});