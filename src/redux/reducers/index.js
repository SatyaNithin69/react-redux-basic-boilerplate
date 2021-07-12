import { combineReducers } from 'redux';
import { ProductReducer } from './Products/ProductReducer';

export const reducers = combineReducers({
  AllProducts: ProductReducer
});
