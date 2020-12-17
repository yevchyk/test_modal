import { 
  SET_MODAL,
} from '../constants/actionTypes'

export const setModal = (display, variant= '', data = null) => ({
  type: SET_MODAL,
  variant,
  display,
  data
});

