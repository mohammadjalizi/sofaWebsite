import React from 'react'
import { checkOtp } from '../../services/auth';
import setCookie from '../../utils/cookie';

const Checkotp = ({code,setCode,mobile,setStep}) => {
  const submitHandeler=  async (event)=>{
    event.preventDefault()
    if(code.length!==5) return;

    const{response,eroror}=  await checkOtp(mobile,code)
    if(response){

  setCookie(response.data)
     console.log(response)
    }
    if(eroror){

      console.log(eroror)
    }
console.log(code,mobile )
  }
  return (
    <from onSubmit={submitHandeler} >
      <p>تایید کد  اس ام اس  شده</p>
    <span> کد بیامک شده    {mobile} را وارد کنید.   </span>
<label htmlFor="input"> کد تایید را وارد کنید </label>
<input type="text"  id='input' placeholder='کد تایید' value={code} onChange={e=>setCode=>e.target.value} />
<button type='submit' >  ورود </button>
<button onClick={() => {
  setStep(1)
}
}>تغییر شماره موبایل</button>
    </from>
  )
}

export default Checkotp