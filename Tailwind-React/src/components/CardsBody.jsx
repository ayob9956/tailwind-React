import React from 'react'

function CardsBody(props) {
  return (
    <div className='border border-gray-400 w-full flex rounded-md '>
        <div>
<img className='w-36 rounded-md' src={props.src} alt="" srcset="" />
        </div>
<div>
<p className='w-36 font-semibold'>{props.pargraph}   </p>
<p className='w-36 font-light'>{props.pargraph1}   </p>
<p className='w-36 font-light'>{props.pargraph2}   </p>
<p className='w-36 font-light'>{props.pargraph3}   </p>
<p className='w-36 font-light'>{props.pargraph4}   </p>
<p className='w-36 font-light'>{props.pargraph5}   </p>
<p className='w-36 font-light'>{props.pargraph6}   </p>
</div>
    </div>
  )
}

export default CardsBody