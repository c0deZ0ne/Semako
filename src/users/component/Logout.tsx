import { BiLogInCircle } from 'react-icons/bi';
import { logout } from '../../redux/actions-creators/authActions';
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch =useDispatch()

  return (
    <>
      <div className="flex flex-row w-[100%]  cursor-pointer"  onClick={()=>dispatch(logout())}>
        <div className="flex flex-row flex-1 gap-[5%] item-center ">
          < BiLogInCircle className='text-[red] font-[16px] text-[24px]' cursor={'pointer'} />
           <div className='font-corsa-grotesk font-[400] text-[19px] text-[#696E7C]'>{'Logout'}</div> 
        </div>
      </div>
    </>
  );
}

export default Logout;
