/**
 * state => the state before the action is triggered (default NULL)
 * action => the action that will change the state
 */
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};