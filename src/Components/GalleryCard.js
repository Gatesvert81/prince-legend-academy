import React from 'react'
import Button from './Button'

function GalleryCard() {
  return (
    <div className='w-full h-52 bg-kids-playing main__bg ' >
        <div className='w-full h-full bg-faded-blue text-white flex flex-col justify-center items-center text-center py-1 gap-2' >
            <p className='card__title w-full' > NSMQ 2021 </p>
            <p className='normal__text w-full' >James Carter & Alan Moore</p>
            <Button style="self-center primary py-1 " >
                View
            </Button>
        </div>
    </div>
  )
}

export default GalleryCard