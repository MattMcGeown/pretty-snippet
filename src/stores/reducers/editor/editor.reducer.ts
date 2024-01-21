import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { EditorState } from './types';

const initialState: EditorState = {
  lineNumbers: false,
  backgroundPadding: 8,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setLineNumbers: (state, action: PayloadAction<boolean>) => {
      state.lineNumbers = action.payload;
    },
    setBackgroundPadding: (state, action: PayloadAction<number>) => {
      state.backgroundPadding = action.payload;
    },
  },
});

export const { setLineNumbers, setBackgroundPadding } = editorSlice.actions;

export default editorSlice.reducer;
