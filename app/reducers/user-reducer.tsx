var userReducer = function(state: any, action: any): any {
    console.log('userreducer is ', state)
  if (state === undefined) {
    state = [{
        name: 'nick'
    }];
  }
  if (action.type === 'ADD_USER') {
    state.push(action.user);
  }
  return state
}

export { userReducer }
