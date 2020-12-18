import React from 'react';
import {Modal} from 'react-bootstrap';
import {setModal} from '../../actions/tools'
import OrderProduct from './OrderProduct'
import { connect } from 'react-redux';
import CloseIcone from '../../icons/CloseIcone'
import css from './Modal.module.scss'

function WrapModal({dispatch, variant, display}) {

  const handleClose = () => {
    dispatch(setModal(false))
  };

  const returnVariant = ( ) => {
    switch (variant) {
      case 'order_product':
        return <OrderProduct/>
      default:
        break;
    }
  }

  return (
      <Modal
        show={display}
        centered
        dialogClassName={css.wrap_modal}
        onHide={handleClose}>
            <div className={css.close} onClick={handleClose}>
              <CloseIcone className="App-close"/>
            </div>
            <div className={css.content}>
              {
                returnVariant()
              }
            </div>
      </Modal>
  );
}

const mapStateToProps = ({tools}) => ({
  variant: tools.modal.variant,
  display: tools.modal.display,
  close_iner: tools.modal.close_iner,
});

export default connect(mapStateToProps)(WrapModal)