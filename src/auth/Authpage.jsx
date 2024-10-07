import React, { useState } from 'react'
import SendOtp from '../components/templet/SendOtp'
import Checkotp from '../components/templet/Checkotp'

const Authpage = () => {

    const [step,setStep]=useState(1)
    const [mobile,setMobile]=useState("")
    const [code,setCode]=useState("")
  return (
    
    <div>
  
{step === 1 && <SendOtp setStep={setStep}   mobile={mobile}   setMobile={setMobile}  />}

{step === 2 && <Checkotp code={code} setCode={setCode}  mobile={mobile}  setStep={setStep}  />}

    </div>
  )
}

export default Authpage