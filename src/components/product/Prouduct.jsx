import React from 'react'
import Apiproduct from './Apiproduct'

const Prouduct = () => {
  return (
    <div className=''>
        
<div className='  flex justify-center  gap-12 my-16  ' >  

<div className='  rounded-full border-blue-500 p-4    hover:border-orange-400 hover:border-dashed  border-2   '>  
<img src='https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75'/>
<h4>صندلی اداری</h4>
</div>  
<div className='  rounded-full border-blue-500 p-4    hover:border-orange-400 hover:border-dashed  border-2   '>  
<img src='https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75'/>
<h4>صندلی اداری</h4>
</div> <div className='  rounded-full border-blue-500 p-4    hover:border-orange-400 hover:border-dashed  border-2   '>  
<img src='https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_lounge_sofa_set_black.jpg%3Fv%3D1709185129&w=96&q=75'/>
<h4>صندلی اداری</h4>
</div> <div className='  rounded-full border-blue-500 p-4    hover:border-orange-400 hover:border-dashed  border-2   '>  
<img src='https://furns-react.netlify.app/_ipx/w_96,q_75/https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fcollections%2Foffice_chari.jpg%3Fv%3D1709185213&w=96&q=75'/>
<h4>صندلی اداری</h4>
</div> 


 </div>

{/* محصولات ما */}

<div className='   flex  flex-col     border-2 p-4  text-center border-b-gray-700  '>

<div>

<h1 className=' text-3xl font-extrabold '>محصولات ما</h1>
<p className='  my-2  m-auto w-96   font-normal   ' >خرید آنلاین و حضوری جدیدترین مدلهای مبل چستر،ال،ارزان و کلاسیک با بهترین کیفیت و متریال ،قیمت مناسب و ارسال مخصوص با باروس. قیمت امروز</p>
</div>
<div>

<ul className=' flex justify-center gap-6 my-8  '>
<li className=' text-2xl font-bold hover:text-orange-400 cursor-pointer active:text-orange-400 '>مبل راحتی</li>
<li className=' text-2xl font-bold hover:text-orange-400 cursor-pointer  '>مبل راحتی</li>
<li className=' text-2xl font-bold hover:text-orange-400 cursor-pointer'>مبل نئو کلاسیک</li>

</ul>
</div>

{/* api product */}

<div className=''>

<Apiproduct/>
</div>

</div>

    </div>
  )
}

export default Prouduct