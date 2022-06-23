import React from 'react'
import Button from './Button'

function AwardCard() {
  return (
    <div className='w-full h-52 flex flex-col justify-end bg-school-award main__bg ' >
        <div className='w-full h-fit backdrop-blur-sm text-white flex flex-col justify-center items-start text-center py-1' >
            <p className='card__title w-full' > NSMQ 2021 </p>
            <p className='normal__text w-full' >James Carter & Alan Moore</p>
            <Button style="self-center primary py-1 " >
                View
            </Button>
        </div>
    </div>
  )
}

export default AwardCard