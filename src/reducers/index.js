import { combineReducers } from 'redux';
import AirlinesReducer from './airlines';
import formReducer from './form'

export default combineReducers({
    AirlinesReducer,
    formReducer
});
