import React from 'react'

function Header() {
  return (
    <div className='w-full flex place-content-center gap-10 '>

        <div className='flex place-content-center  gap-10'>
        <div className="bg-[url('https://retaildesignblog.net/wp-content/uploads/2015/04/Yamanami-chairs-by-Mikiya-Kobayashi-05.jpg')] w-[60vw] h-96">
            <div className='p-10 font-semibold'>
            <p>
                Wooden
            </p>
            <p>
                Minimalistc
            </p>
            <p>
                Chair
            </p>
<div className='font-bold pt-10 '>
   <p>Sale up to </p> 
   <p className='text-lime-600 '>40% UP</p>
   <p className='w-24 h-12 bg-yellow-500 rounded-md items-center flex justify-center  '>
    Shop Now
   </p>
</div>


            </div>
        </div>
        <img className='w-[30vw] h-96' src="https://nouthemes.net/html/martfury/img/slider/home-4/left.jpg" alt="" srcset="" />
    </div>
    </div>
  )
}

export default Header