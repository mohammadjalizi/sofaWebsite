import React from 'react'
import { sendOtp } from '../../services/auth';

const SendOtp = ({mobile,setMobile,setStep}) => {

const submithandeler= async (event)=>{
  event.preventDefault() 
  if(mobile.length !==11) return;


  const{response,error}= await sendOtp(mobile)
  if(response){
setStep(2)
if(error) console.log(error )

  }
  console.log(response,error)
}

  return (
   
    <form className='  ' onSubmit={submithandeler}>

      <p> ورود به حساب کاربری </p>
      <label  className=' block my-4 shadow-2xl p-3 ' htmlFor="input" >شماره موبایل خود را وارد کنید </label>
    <input  className=' block my-4 shadow-2xl p-3 ' type="text"  id='input' placeholder='شماره موبایل ' value={mobile}  onChange={e=>setMobile(e.target.value)} />
    <button >ارسال کد تایید</button>
    </form>
  )
}

export default SendOtp