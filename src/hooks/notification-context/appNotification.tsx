import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import {CombinedState } from 'redux';
import { combinedState } from '../../redux/reducers';
import toast from 'react-hot-toast';
import { FAILED, SUCCESS, reset } from '../../redux/actions-creators/notificationActions';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '../../redux/actions-creators/appSatusActions';
const AppNotification: React.FC = () => {
  const {message,show,status} = useSelector((state:CombinedState<combinedState>) =>state.noitification);
  const dispatch = useDispatch()
  useEffect(()=>{
    if(status==FAILED&&show){
      dispatch(startLoading())
      setTimeout(()=>{
        dispatch(stopLoading())
        toast.error(message)
        dispatch(reset())
      },1000)
    }else if(status==SUCCESS&&show){
      dispatch(startLoading())
     setTimeout(()=>{
        dispatch(stopLoading())
        toast.success(message)
        dispatch(reset())
      },1000)
    }
  },)
  return (null);
};

export default AppNotification;


