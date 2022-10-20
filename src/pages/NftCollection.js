import React from 'react'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'

const NftCollection = () => {
  return (
    <div style={{ position:"absolute", top: 0, left: 0, zIndex: 1, display:'flex', justifyContent:'center' }}>
      <Header />
      <Card />
    </div>
  )
}

export default NftCollection
