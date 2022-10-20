import React from 'react'
import AddressList from '../components/AddressList/AddressList'
import Header from '../components/Header/Header'
import NftSlider from '../components/NftSlider/NftSlider'
import './homeStyle.css'

const Home = () => {
  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%"}}>
      <Header />
      <div className='content'>
        <div className='numbers'>
          <div className='users'>
            <p className='title'>USERS</p>
            <p className='number'>10000+</p>
          </div>
          <div className='worth-nfts'>
            <p className='title'>WORTH NFTs</p>
            <p className='number'>3546</p>
          </div>
        </div>
        <NftSlider />
      </div>
      <AddressList />
    </div>
  )
}

export default Home
