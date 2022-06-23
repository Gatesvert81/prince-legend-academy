import React from 'react'

function AdmissionCard({step}) {
  return (
    <div className='w-full text-center' >
        <p className='card__title' >{step}</p>
        <p className='normal__text' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  )
}

export default AdmissionCard