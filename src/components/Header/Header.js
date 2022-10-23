import React, {useEffect} from 'react'
import './headerStyle.css'
import logo from '../../assets/logo3.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';

import Search from '../Search/Search'

const Header = () => {  

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='header'>
      <img 
        src={logo} 
        alt="" 
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="200" 
      />
      <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center",flexDirection:"row"}} className="nav">
        <ul>
          <li><Link to="/"><p>Home</p></Link></li>
          <li><Link><p>About</p></Link></li>
        </ul>

        <Search />
      </div>

      
    </div>
  )
}

export default Header
