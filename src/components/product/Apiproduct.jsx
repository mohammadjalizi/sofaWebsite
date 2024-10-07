import React from 'react'
import "./Cart.css"
const Apiproduct = () => {
  return (
    <div className=' flex justify-center w-full gap-5 flex-wrap '>
        

{

["a","b","c","a","b","c"].map((item)=>{

return(

<div className='  shadow-2xl  my-9 border-2  border-b-green-600 p-4 '>

<img className=' w-96' src="https://moblbaros.com/wp-content/uploads/2024/09/%D9%85%D8%A8%D9%84-%D8%A7%D9%84-%D8%B1%D8%A7%D8%AD%D8%AA%DB%8C-%D8%B5%D8%A8%D8%A7-%D9%88-%D9%85%D8%A7%D8%A6%D8%AF%D9%87-%D8%AE%D8%B1%DB%8C%D8%AF-%D8%A8%D8%A7%D8%B1%D9%88%D8%B3-1-3-550x367.webp"  alt="" />
<h1>مبل ال راحتی صبا و مائده</h1>
<span className="vivavj-price"> 74,400,000 تومان</span>
    </div>

)

})

}



    </div>
  )
}

export default Apiproduct