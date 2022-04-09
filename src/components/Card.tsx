import React from 'react'

function Card({imgUrl="",title=""}) {
  return (
    <div className='snap-center relative w-[200px] h-[400px] mr-[15px] shrink-0'>
      <img src={imgUrl} alt="" className='object-cover h-[350px] w-full' />
      <div className='prose prose-xl text-center'>{title}</div>
    </div>
  )
}

export default Card