/* eslint-disable import/no-anonymous-default-export */
import {
  SET_PRODUCTS,
  CLEAN_DATA
} from '../constants/actionTypes'

export const initialState = {
  productsList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return Object.assign({}, state, {
        productsList: action.data
      })
    }

    case CLEAN_DATA: {
      return Object.assign({}, state, {
        ...initialState,
      })
    }

    default: {
      return state
    }
  }
}
