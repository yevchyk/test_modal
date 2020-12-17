import {
  SET_PRODUCTS,
  ADD_TO_PRODUCTS,
  REMOVE_PRODUCT,
  CHANGE_VALUE_IN_PRODUCT,
  CHANGE_PRODUCT_VALUE_BY_ID,
} from '../constants/actionTypes'
import { snackbarSet, snackbarUnset, setLoad } from './tools'
import instance from '../api/axios';

export const getProducts = () => async dispatch => {
  dispatch(setLoad(true))
  return instance.get('products').then(res => {
    dispatch(setProduct(res.data));
    dispatch(setLoad(false))
    return res.data
  })
};

export const addProduct = (data) => async dispatch => {
  dispatch(setLoad(true))
  return instance.post('products/add', JSON.stringify(data)).then(res => {
    dispatch(addToProductes({id: res.data, ...data}))
    dispatch(setLoad(false))
    return res.data
  });
}

export const changeProduct = (data) => async dispatch => {
  dispatch(setLoad(true))
  return instance.post(`products/change/${data.id}`, JSON.stringify(data)).then(res => {
    dispatch(changeProductValueById(data.id, data))
    dispatch(setLoad(false))
    return res.data
  });
}

export const removeProduct = (id) => async dispatch => {
  dispatch(setLoad(true))
  return instance.get(`products/remove/${id}`).then(res => {
    dispatch(setRemoveProduct(id))
    dispatch(setLoad(false))
    return res.data
  });
}


export const setProduct = (data) => ({
  type: SET_PRODUCTS,
  data
});

export const addToProductes = (data) => ({
  type: ADD_TO_PRODUCTS,
  data
});

export const setRemoveProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id
});

export const changeValueInProduct = (value, data) => ({
  type: CHANGE_VALUE_IN_PRODUCT,
  value,
  data,
});

export const changeProductValueById = (id, data) => ({
  type: CHANGE_PRODUCT_VALUE_BY_ID,
  data,
  id,
});
