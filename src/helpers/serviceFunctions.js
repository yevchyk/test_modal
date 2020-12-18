export function validateName(value) {
  if (!value.length) {
    return {
      errorMessage: 'This field in required',
      status: 'error'
    }
  }else if (!value.match(/^[A-Za-zА-Яа-яЁё]+$/)) {
    return {
      errorMessage: 'Only letters allowed',
      status: 'error'
    }
  }
  return {
    errorMessage: '',
    status: 'success'
  }
}

export function validateNumber(value) {
  if (!value.length) {
    return {
      errorMessage: 'This field in required',
      status: 'error'
    }
  }else if (value.length !== 12) {
    return {
      errorMessage: 'Should contain 12 characters',
      status: 'error'
    }
  }
  return {
    errorMessage: '',
    status: 'success'
  }
}
