import React from 'react'
import { GoPerson } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

import './Navbar.css'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='  bg-[#10b981]   flex  justify-evenly items-center '>
        
<div className='  flex logo  ' >


خرید صندلی


</div>
<div className=' flex items-center gap-4'>
<div className=' flex items-center gap-6'>
<h1 onClick={() => {
  navigate("/signin")
}
} className=' logo icon '> 

  ورود  
</h1>
<h1 className=' logo icon '>

ثبت نام
</h1>

</div>

<AiOutlineShopping className=' logo  icon m-3  size-8  ' />
</div>

    </div>
  )
}

export default Navbar