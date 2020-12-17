/* eslint-disable import/no-anonymous-default-export */
import { 
  SET_MODAL,
  CLEAN_DATA,
  } from '../constants/actionTypes'

export const initialState = {
  modal: {
    variant: '',
    display: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_MODAL: {
      return Object.assign({}, state, {
        modal: {
          variant: action.variant,
          display: action.display,
          data: action.data
        },
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
