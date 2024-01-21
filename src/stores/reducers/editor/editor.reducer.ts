import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EDITOR_DEFAULT_TITLE } from '@/components/feature/EditorHeader/constants';

import type { EditorState } from './types';

const initialState: EditorState = {
  lineNumbers: false,
  backgroundPadding: 8,
  title: EDITOR_DEFAULT_TITLE,
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
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setLineNumbers, setBackgroundPadding, setTitle } =
  editorSlice.actions;

export default editorSlice.reducer;
