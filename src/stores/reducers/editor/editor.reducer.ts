import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { EditorState } from './types';

const initialState: EditorState = {
  lineNumbers: false,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setLineNumbers: (state, action: PayloadAction<boolean>) => {
      state.lineNumbers = action.payload;
    },
  },
});

export const { setLineNumbers } = editorSlice.actions;

export default editorSlice.reducer;
