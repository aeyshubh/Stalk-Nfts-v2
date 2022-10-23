import React from 'react'
import  './blurBgStyle.css'
import bg from '../../assets/svg (1).png'
import eth from '../../assets/ethereum.png'

const BlurBg = () => {
  return (
    <div className='container'>
        <img src={eth} alt="" className='eth-img' />
    </div>
  )
}

export default BlurBg
