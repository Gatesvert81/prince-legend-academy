import React from 'react'

function TestimonialCard() {
  return (
    <div className='w-full h-fit shadow flex flex-col justify-start items-center p-5 gap-3 rounded' >
        <div className='normal__text text-center' >
            <p>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            </p>
        </div>
        <div className='w-full flex flex-col items-center' >
            <p className='card__title' >Evans Kenneth</p>
            <p className='normal__text'>2021 Alumni</p>
            <div className='w-16 h-16 bg-orange-300 rounded-full' />
        </div>
    </div>
  )
}

export default TestimonialCard