import React from 'react'

function VisionCard({title}) {
    return (
        <div className='w-full h-fit flex flex-col gap-3 p-5 justify-start items-center rounded shadow' >
            <div className='w-full card__title text-center' >
                <div>icon</div>
                <p> {title} </p>
            </div>
            <div className='w-full normal__text text-center'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}

export default VisionCard