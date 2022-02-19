import { combineReducers } from 'redux';
import registerReducer from './register.reducer';
import loginReducer from './login.reducer';
import userReducer from './user.reducer';

export default combineReducers({
	registerReducer,
	loginReducer,
	userReducer,
});
