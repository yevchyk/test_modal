import { 
  SET_SNACKBAR,
  UNSET_SNACKBAR,
  SET_LOAD,
  SET_MODAL,
  SET_SETTING,
} from '../constants/actionTypes'


// ['error', 'info', 'success', 'warning']
export const snackbarSet = (variant, message) => ({
  type: SET_SNACKBAR,
  variant,
  message
});

export const setModal = (display, variant= '', close_iner=false, data = null) => ({
  type: SET_MODAL,
  variant,
  display,
  close_iner,
  data
});

export const setSetting = (variant, data) => ({
  type: SET_SETTING,
  variant,
  data,
});

export const snackbarUnset = () => ({
  type: UNSET_SNACKBAR,
});

export const setLoad = (data) => ({
  type: SET_LOAD,
  data
})

