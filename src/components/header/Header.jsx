import React from 'react'
const navigate = useNavigate();
import './Header.css'
const Header = () => {
  const navigate = useNavigate();
  return (

    <div className=' header '>


  
    <div className=' swiper  flex  justify-evenly items-center   '>
        <div className='   '>

<h4 className='  my-6 '>محصولات جدید</h4>

<h2 className='  my-6  text-7xl font-bold '>صندلی انعطاف پذیر</h2>
<p className=' text-lg      w-96  '>درد به خودی خود بسیار مهم است و به دنبال آن آدیپیس می شود، اما در عین حال در نتیجه درد و زایمان شدید رخ می دهد.</p>
<button  className=' btn   w-28 rounded-lg my-4  p-2 text-white '>  خرید </button>
        </div>
       <div className='  my-24 '>
       <img src="https://furns-react.netlify.app/images/slider-image/slider-1.png" alt="Flexible Chair" width="540" height="458"/>
        </div>


    </div>



    
    </div>
  )
}

export default Header