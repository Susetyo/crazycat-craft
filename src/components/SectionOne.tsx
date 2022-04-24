import React from 'react'
import ReactPlayer from 'react-player/youtube'
import '../styles/SectionOne.scss'

function SectionOne() {
  return (
    <div className='section-one'>
      <div className='player-wrapper'>
        <ReactPlayer 
          className="react-player"
          width={'100vw'}
          height={'100vh'}
          url='https://www.youtube.com/watch?v=E3DDRW-IASA&list=RDE3DDRW-IASA&start_radio=1&autoplay=1"' 
          playing={false}
          stopOnUnmount={false}
          loop
          onReady={(obj)=>{
            console.log(obj)
          }}
          muted
          />
      </div>
      <div className="flex flex-col justify-center items-center h-screen relative">
        <div className='prose prose-2xl text-white'>
          HELLO MY NAME SUSETYO
        </div>
        <div className='prose prose-2xl text-white'>
          I'M FRONTEND DEVELOPER
        </div>
      </div>
    </div>
  )
}

export default SectionOne