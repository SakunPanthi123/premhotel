import React from 'react'

const InfoCard = (props) => {
  return (
    <div className='p-6 flex flex-col border shadow-md w-full rounded-md h-48'>
        <h1 className='text-xl font-bold'>
            {props.title}
        </h1>
        <p className='text-md'>
            {props.content}
        </p>
    </div>
  )
}

export default InfoCard