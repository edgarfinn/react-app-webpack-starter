import { combineReducers } from 'redux';
import HelloReducer from './reducer_hello_redux';
import SelectedGreetingReducer from './reducer_selected_greeting';

const rootReducer = combineReducers({
  welcome: HelloReducer,
  selectedGreeting: SelectedGreetingReducer,
});

export default rootReducer;
