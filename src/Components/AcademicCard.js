import React from 'react'

function AcademicCard({name}) {
  return (
    <div className='w-full h-40 flex flex-col justify-center items-center rounded shadow' >
        <p className='card__title' > {name} </p>
    </div>
  )
}

export default AcademicCard