import React from 'react'

function NavBar() {
  return (
    <div className='bg-amber-500 h-14 flex justify-center'>
        <ul className='flex text-xl h-full w-[80vw] font-medium max-sm:font-normal  items-center gap-5 max-sm:gap-4 justify-center flex-nowrap'>
            <li className='flex flex-nowrap'>All Category</li>
            <li className='text-gray-700 flex flex-'>Today Deals</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Computers</li>
            <li>Furnuters</li>
            <li>Mom & Bay</li>
            <li>Books & More</li>
        </ul>
        </div>
  )
}

export default NavBar