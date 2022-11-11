import React, { useEffect, useContext } from "react";
import "./headerStyle.css";
import logo from "../../assets/logo3.png";
import { Link } from "react-router-dom";
import AOS from "aos";

import Search from "../Search/Search"
import { ethers } from "ethers";
import Auth from "../../context/Auth";

const Header = () => {

  const { connectWallet, walletAddress } = useContext(Auth)

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="header">
      <div className="img-search">
        <img
          src={logo}
          alt=""
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="200"
        />
        <div className="search-web">
          <Search />
        </div>
      </div>

      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <p className="btn from-top">Home</p>
            </Link>
          </li>
          <li>
            <Link>
              <p className="btn from-top">About</p>
            </Link>
          </li>

          { 
            !walletAddress 
              ? <li><button onClick={connectWallet}><p style={{padding:"7px 5px"}}>Connect wallet</p></button></li>
              : <li><Link to="/account"><p className="metamask" title={walletAddress}><i class="fa-solid fa-user"></i></p></Link></li>
          }  
          
        </ul>
      </div>

      <input id="toggle" type="checkbox"></input>

      <label for="toggle" class="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </label>

      <div className="nav2">
        <div className="nav-wrapper">
          <nav>
            <div className="search-mobile" >
              <Search />
            </div>
            
            <div style={{display:"flex", flexDirection:"column", marginTop:"4rem"}}>
              <Link to="/"><p>Home</p></Link>
              <Link><p>About</p></Link>
                { 
                  !walletAddress 
                    ? <button onClick={connectWallet}><p style={{padding:"7px 5px"}}>Connect wallet</p></button>
                    : <Link to="/account"><p className="metamask" title="">{walletAddress}</p></Link>
                }    
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
