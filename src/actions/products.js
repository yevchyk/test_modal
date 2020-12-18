import {
  SET_PRODUCTS,
} from '../constants/actionTypes'
import instance from '../api/axios';

export const getProducts = () => async dispatch => {
  return instance.get('/').then(res => {
    dispatch(setProduct(res.data));
    return res.data
  })
};

export const orderProduct = (data) => async dispatch => {
  return instance.post('/', JSON.stringify(data)).then(res => {
    console.log('resived data from server', res.data)
    return res.data
  })
};

export const setProduct = (data) => ({
  type: SET_PRODUCTS,
  data
});
