import React, {useEffect, useState} from 'react'
import './searchStyle.css'
import $ from 'jquery';
import 'antd/dist/antd.css';

import { useNavigate } from 'react-router-dom';
import Loading from '../LoadingSpinner/Loading';

  
const Search = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const loadingAnime = () => {
    setLoading(true);

    //some async process
    // fetch('my/API/Endpoint', {
    //   method: 'post',
    //   body: "data",
    // }).then((data) => {
    //   setLoading(false);
    // });

    setTimeout(() => {
      setLoading(false)

      $(".wrapper2").removeClass("active");
      $(".search-btn").fadeIn(800);
      $(".search-data").fadeOut(500);
      $(".close-btn").fadeOut(500);
      $(".search-data .line").removeClass("active");
      $("input").val("");
      $(".search-data label").fadeOut(500);
      $(".search-data span").fadeOut(500);
      
      navigate("/nft-collection")
    }, 2000)
  }

  useEffect(() => {
    $(".search-btn").on('click', function(){  
       $(".wrapper2").addClass("active");
       $(this).css("display", "none");
       $(".search-data").fadeIn(500);
       $(".close-btn").fadeIn(500);
       $(".search-data .line").addClass("active");
       setTimeout(function(){
         $(".search-data label").fadeIn(500);
         $(".search-data span").fadeIn(500);
       }, 800); 
     });
              
     $(".close-btn").on('click', function(){
       $(".wrapper2").removeClass("active");
       $(".search-btn").fadeIn(800);
       $(".search-data").fadeOut(500);
       $(".close-btn").fadeOut(500);
       $(".search-data .line").removeClass("active");
       $("input").val("");
       $(".search-data label").fadeOut(500);
       $(".search-data span").fadeOut(500);
     });
  })
    
  return (
    <div className='search'>
      <div className="close-btn">
         <span className="fas fa-times"></span>
      </div>
      
      <div className="search-btn">
        <span className="fas fa-search"></span>
      </div>
      <div className="user">
        <span class="fa-solid fa-user"></span>
      </div>
      <div className="wrapper2">
         <div className="search-data">
            <input 
              type="text" 
              required 
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  loadingAnime()
                }
              }} 
            />
            <div className="line"></div>
            <label> Wallet Address...</label>
            {loading ? <Loading /> : <span className="fas fa-search" onClick={loadingAnime}></span>}
            
         </div>
      </div>
    </div>
  )
}

export default Search