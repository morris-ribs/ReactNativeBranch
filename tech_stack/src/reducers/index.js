import { combineReducers } from 'redux';

import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// The keys represent how the reducers are going to be shown on the state
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});