//reducers are usually called with two arguments
//1: the current state it has produced, and an action
const reducer = (state=[], action) => {
	if(action.type === 'split_string') return action.payload.split('');
  else if(action.type === 'add_char'){
    return [ ...state, action.payload ];
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

//all actions must have a type property, which defines the action to be performed
//and a payload property, which holds the data to be acted on
const action = { 
  type: 'split_string',
	payload: 'cahak'
};

//pass the action to the reducer
store.dispatch(action);

//now get state
store.getState();

//now add another action, as a test to see multiple actions at work
const action2 = {
	type: 'add_char',
  payload: 'b'
};

store.dispatch(action2);
store.getState();