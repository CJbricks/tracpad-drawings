import React from 'react';
import './/LandingPage.css';
import backgroundcat from './/srcimgz/backgroundcat2.jpg';
import logo from './/srcimgz/logoss.png';
import iconig from './/srcimgz/iconimg.png';
import iconsq from './/srcimgz/squaresp.png';
//import gbl from './/srcimgz/gbl.png';
import gitlogo from './/srcimgz/gitlogo.png';





export default function LandingPage() {
  return (
    
    <div className="img-container">
      

    
      <div className="logo-container">
        <a href="https://cjchristian.com" target="_blank" rel="noopener noreferrer">
        <img
          className="logo"
          src={logo} alt="logo"
          height={250}
          width={250}
          />
        </a>

        <a
        href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
        <img 
          className= "icon-ig"
          src={iconig}
          alt="icon-ig"
          height={75}
          width={75}
         />
         </a>

         <a href="https://squarespace.com" target="_blank" rel="noopener noreferrer">
         <img
         className="icon-sq"
         src={iconsq}
         alt="icon-sq"
         height={75}
         width={75}
         />
         </a>

         <a
        href="https://github.com/cjon343" target="_blank" rel="noopener noreferrer">
        <img 
          className= "git-icon"
          src={gitlogo}
          alt="git-icon"
          height={75}
          width={75}
         />
         </a>
        <div className="name-box">
          <p className='name-tag'>CJ Christian</p>
        </div> 
      </div>

      
      <img 
      className="background-cat"
      src={backgroundcat} alt="background-cat" 
      height= {750}
      width={1060} 
      />
      
    </div>

  )
}
