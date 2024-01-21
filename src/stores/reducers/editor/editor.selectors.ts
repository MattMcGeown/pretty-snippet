import { RootState } from '@/stores/reducers/_root.reducer';

export const selectLineNumbers = (state: RootState) => state.editor.lineNumbers;
