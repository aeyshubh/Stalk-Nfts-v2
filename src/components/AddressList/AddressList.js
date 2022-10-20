import React from 'react'
import './addressStyle.css'

const AddressList = () => {
  return (
    <div className='table'>

        <div className='table-title'>
            <p>Top Searches</p>
        </div>

        {/* Header */}
        <div className='table-header'>
            <div className='table-address'>
              <p>Wallet Address</p>
            </div>
            <div className='table-nfts'>
              <p>Total NFTs</p>
            </div>
            <div className='table-value'>
              <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
              <p> &nbsp;&nbsp;ETH</p>
            </div>
        </div>

        {/* Data */}
        <div className='content-table'>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
          <div className='table-data'>
              <div className='wallet-address'>
                <p>0xF13cc670E528cD7c6fDC9420f39D725E9375F98A</p>
              </div>
              <div className='total-nfts'>
                <p>69</p>
              </div>
              <div className='nft-value'>
                <img src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png" alt="" />
                <p> &nbsp;31</p>
              </div>
          </div>
        </div>        

    </div>
  )
}

export default AddressList
