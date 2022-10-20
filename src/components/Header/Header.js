import React, {useEffect} from 'react'
import './headerStyle.css'
import logo from '../../assets/stalknfts.gif'
import { Link } from 'react-router-dom'
import AOS from 'aos';

import Search from '../Search/Search'

const Header = () => {  

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='header'>
      <Link to="/">
        <img 
          src={logo} 
          alt="" 
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="200" 
        />
      </Link>

      <Search />
    </div>
  )
}

export default Header
