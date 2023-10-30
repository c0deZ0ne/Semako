import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../component/Button';
import Paypal_button from '../../component/payment/paypal_button';
import { nanoid } from 'nanoid';
import { calcPayStackFee } from '../../../utils';
import { useSelector } from 'react-redux';
import { combinedState } from '../../../redux/reducers';
import { CombinedState } from 'redux';
import { usePaystackPayment } from 'react-paystack';
import { useDispatch } from 'react-redux';
import { creditAccount } from '../../../redux/actions-creators/transactionActions';
import { IAcountTransactions, ItransactionActions } from '../../../redux/interfaces/ITransaction';

const payment: FC = () => {
  const [paystackFee,setPaysyackFee] = useState({})
  const [paystackConfig, setPaystackConfig] = useState<any>({})
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(0)
  const {user,isAuthenticated} = useSelector((state:CombinedState<combinedState>) =>state.auth);


 

  useEffect(() => {
    if(isAuthenticated&&user){
        try {
           calcPayStackFee(Number(amount)).then((data)=>{
            setPaysyackFee(data)
            const config =  {
               amount:data.totalcost,
               phone:user.phone,
               email: user.email,
               fullName: user.name,
               publicKey:"pk_test_80d861a8e1528e0b9ff5768a25fd77900dd6707a",
               metadata: {
                 paymentId:nanoid(16),
                 data
               },
             };
         
             setPaystackConfig( config)
          })
        
        } catch (error) {
          console.log(error)
        } 
    }
  },[user,amount])

  const handlePaystackSuccessPayment:any =  (ot:any) => {   
  const payload:IAcountTransactions = {
    email: user?.email?user.email:"",
    id: ot.reference,
    title: "credit account",
    date: new Date(),
    type:"credit",
    amount: amount
  }
  dispatch(creditAccount(payload))

    console.log(ot,"success")
 }

 const handleClosePaystackPayment = () => {
  // toast.warn("Payment Cancelled")
  console.log("cancelled")
}
  const initializePayment = usePaystackPayment(paystackConfig);


  async function handlePaystack() {
      try {
        initializePayment(handlePaystackSuccessPayment, handleClosePaystackPayment)
  
      } catch (error) {
        console.log(error)
        // return toast.warning(error?.response?.data?.message)
      }
  }

  return (
    <>
      <div className="flex md:h-screen  items-top  justify-center text-[12px] pt-10 ">
        <div className=" max-sm:w-[100%] md:w-[426px] md:pl-6 md:pr-6 items-center justify-center ">
          <div className="bg-white md:shadow-2xl rounded md:w-[100%] sm:w-[100%] sm: px-[5%] items-center justify-center p-8">
            <div className="flex flex-col justify-center align-center ">
              Credit My Account 
            </div>
          
            <div>
              <form className="relative  text-[#696E7C] font-Corsa-Grotesk">

                <div className="mb-4 mt-4">
                  <label
                    className={`${createAcctStyles.formText} mb-[8px]`}
                    htmlFor="Amount"
                  >
                    Enter Amount
                  </label>
                  <input
                    className="h-[52px] pl-[15px] appearance-none border rounded-lg w-full py-2 px-3 text-[#696E7C] leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                    id="amount"
                    type="number"
                    onChange={(e)=>setAmount(Number(e.target.value))}
                    placeholder="3000"
                  />
                </div>
        
                <div className="">
                
                    <Button
                      text="Credit"
                      onClick={()=>handlePaystack()}
                      className="w-full outline-none border-none h-[10%] bg-[#000000] font-Corsa-Grotesk font-normal  text-[#FCFCFC]  py-[5px] px-4 text-[14px] rounded-lg"
                    />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const createAcctStyles = {
  text: 'font-corsa-grotesk font-extrabold text-[#434A5B] text-center md:text-[24px]  text-base leading-5',
  formText: `block text-sm font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`
};

export default payment;
