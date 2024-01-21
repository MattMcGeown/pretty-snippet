import { RootState } from '@/stores/reducers/_root.reducer';

export const selectLineNumbers = (state: RootState) => state.editor.lineNumbers;
export const selectBackgroundPadding = (state: RootState) =>
  state.editor.backgroundPadding;
export const selectTitle = (state: RootState) => state.editor.title;
