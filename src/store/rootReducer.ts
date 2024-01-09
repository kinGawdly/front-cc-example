// src/store/rootReducer.ts
import { combineReducers } from 'redux';
import carouselReducer from '../reducers/carouselReducer';
import authReducer from '../reducers/authReducer';
import carritoReducer from '../reducers/carritoReducer'

const rootReducer = combineReducers({
  carousel: carouselReducer,
  auth: authReducer,
  carrito: carritoReducer,
  // ...otros reducers
});

export default rootReducer;
