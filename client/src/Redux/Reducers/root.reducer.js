import { combineReducers } from 'redux';


import counterReducer from './Auth/auth.reducer';

const rootReducer = combineReducers({
    auth: counterReducer,

});

export default rootReducer;