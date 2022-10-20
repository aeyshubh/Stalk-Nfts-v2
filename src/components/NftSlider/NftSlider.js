import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-cards";
import { EffectCards } from "swiper"; // import required modules

import './nftSlider.css'
import AOS from 'aos';

const NftSlider = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="nftslider">
      <p className='slider-title' style={{ fontSize: "2.1rem", fontWeight: 800 }}>Top NFTs</p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card2">          
            <img src='https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960' alt="" />
            <div className="price2">
              <p className='c-price'> 
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" /> <p className='eth'>31 ETH</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card2">          
            <img src='https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31' alt="" />
            <div className="price2">
              <p className='c-price'> 
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" /> <p className='eth'>31 ETH</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="card2">          
            <img src='https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149611030.jpg?w=2000' alt="" />
            <div className="price2">
              <p className='c-price'> 
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" /> <p className='eth'>31 ETH</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="card2">          
            <img src='https://www.cnet.com/a/img/resize/c5b48e90abe8b7fe339fc0139f3834dbe434fee5/hub/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200' alt="" />
            <div className="price2">
              <p className='c-price'> 
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" /> <p className='eth'>31 ETH</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card2">          
            <img src='https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?compress=1&resize=400x300' alt="" />
            <div className="price2">
              <p className='c-price'> 
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" /> <p className='eth'>31 ETH</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default NftSlider
