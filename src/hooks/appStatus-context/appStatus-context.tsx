
import Modal from '@mui/material/Modal';
import {CombinedState } from 'redux';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { combinedState } from '../../redux/reducers';
import { useEffect } from 'react';
import { reset } from '../../redux/actions-creators/notificationActions';
import { useDispatch } from 'react-redux';
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

export default function AppLoading() {
  const {IsLoading} = useSelector((state:CombinedState<combinedState>) =>state.appStatus);
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log("App Loader",IsLoading)
    dispatch(reset())
  },[IsLoading])
  return (
    <div>
      <Modal
        open={IsLoading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       < div className="absolute top-[35%] sm:left-['38%'] left-[44%] md:left-[50%] ">
        {IsLoading&&(<ReactLoading type={'spin'} color={'blue'} height={50} width={50} />)}
       </div> 
      </Modal>
    </div>
  );
}
