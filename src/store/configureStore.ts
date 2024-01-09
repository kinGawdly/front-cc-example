// store/configureStore.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productosReducer from '../reducers/productosReducer';
import authReducer from '../reducers/authReducer';


const rootReducer = combineReducers({
  productos: productosReducer,
  auth: authReducer,
  // Añade aquí tus otros reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
