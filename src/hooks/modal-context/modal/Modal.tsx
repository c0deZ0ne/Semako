
import Modal from '@mui/material/Modal';
import {CombinedState } from 'redux';
import { combinedState } from '../../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/actions-creators/modalActions';
import { success,failure,loading } from '../../../redux/actions-creators/notificationActions';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function AppModal() {
  const {status,element} = useSelector((state:CombinedState<combinedState>) =>state.modal);
  const dispatch = useDispatch();
const haddleClose = ()=>{
  dispatch(success({message:"closed successfully"}))
  return  dispatch(closeModal())
}

  return (
    <div>
      <Modal
        open={status}
        onClose={haddleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>{element}</>
      </Modal>
    </div>
  );
}
