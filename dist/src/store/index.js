import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';
export var store = configureStore({ reducer: reducer });
