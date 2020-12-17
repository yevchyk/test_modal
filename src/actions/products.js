import {
  SET_PRODUCTS,
} from '../constants/actionTypes'
import instance from '../api/axios';

export const getProducts = () => async dispatch => {
  return instance.get('v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e').then(res => {
    dispatch(setProduct(res.data));
    return res.data
  })
};

export const setProduct = (data) => ({
  type: SET_PRODUCTS,
  data
});
