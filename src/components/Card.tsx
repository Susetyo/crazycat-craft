import React from 'react'

function Card({imgUrl="",
  title="", 
  textColor="",
  onClick=(ref:any)=>{},
  isActive=false,
  x=0,
  y=0
}) {
  const ref = React.useRef(null);

  return (
    <div ref={ref} style={x !== 0 && isActive ? {left:x} : {}} className={`${isActive ? `w-[250px] h-[450px] absolute z-30 top-[-50px] ${x !== 0 ? `left-[${x}px]` : ''}` : 'relative'} snap-center w-[200px] h-[400px] mr-[15px] shrink-0`} onClick={() => onClick(ref)}>
      <img src={imgUrl} alt="" className='object-cover h-[350px] w-full' />
      <div className={`prose prose-xl text-center ${textColor ? textColor : ''}`}>{title}</div>
    </div>
  )
}

export default Card