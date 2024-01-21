import { combineReducers } from '@reduxjs/toolkit';

import { editorReducer } from '@/stores/reducers/editor';

const rootReducer = combineReducers({
  editor: editorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
