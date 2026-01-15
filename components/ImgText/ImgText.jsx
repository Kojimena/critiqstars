import React from 'react'
import Tittle from '../Tittle/Tittle'
import Subtitle from '../Subtitle/Subtitle'

const ImgText = ({reverse, title, subtitle, imgsrc}) => {
  return (
    <div className={`flex flex-col items-center justify-between gap-8 w-full ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className='flex flex-col lg:items-start lg:justify-start w-full lg:w-1/2 lg:h-80 gap-4 '>
              <Tittle title={title} color={"#d69de5"} />
              <Subtitle text={subtitle} color={"#fff"} />
            </div>
        <img src={imgsrc} alt='mission' className='h-80  object-cover'/>
    </div>
  )
}

export default ImgText