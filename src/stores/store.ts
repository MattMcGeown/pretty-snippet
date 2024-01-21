import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/_root.reducer';

const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
