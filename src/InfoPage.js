import React from 'react';
import './InfoPage.css';
import oven from './/srcimgz/headinoven.jpg';
import trash from './/srcimgz/cutdownthemiddle.jpg';
import head from './/srcimgz/notherone.jpg';
import trashboy from './/srcimgz/trashboy.jpg';
import bleach from './/srcimgz/bleesh copy.jpg';
import socket from './/srcimgz/drywall copy.jpg';
import facepaint from './/srcimgz/crowns copy.jpg';
import fingers from './/srcimgz/cuttingmyfingies copy.jpg';
import dad from './/srcimgz/dad.jpg';
import internet from './/srcimgz/internet.jpg';
import shed from './/srcimgz/shed.jpg';
import promise from './/srcimgz/promise.jpg';
import stand from './/srcimgz/stand.jpg';
import pry from './/srcimgz/pry.jpg';
import wearecops from './/srcimgz/wearecops.jpg';
import cop from './/srcimgz/COPWORK3.jpg';




export default function InfoPage() {
  return (

    
    <div className="img-body">

      <h1>TracPad Compositions</h1>
          <div className="tpadbox">
            <img
              className="oven"
              src={oven} 
              alt="maninoven"
              height={300}
              width={250}
            />
            <img
              className="trash"
              src={trash} 
              alt="trash"
              height={300}
              width={250}
            />
  
            <img
              className="head"
              src={head} 
              alt="trashcan-two"
              height={300}
              width={250}
            />

            <img
              className="boy"
              src={trashboy} 
              alt="boyundertrash"
              height={300}
              width={250}
            />
            <img
              className="bleach"
              src={bleach} 
              alt="bleach"
              height={300}
              width={250}
            />
            
            <img
              className="socket"
              src={socket} 
              alt="socket"
              height={300}
              width={250}
            />
            <img
              className="facepaint"
              src={facepaint} 
              alt="facepaint"
              height={300}
              width={250}
            />

            <img
              className="fingers"
              src={fingers} 
              alt="fingers"
              height={300}
              width={250}
            />

            <img
              className="dad"
              src={dad} 
              alt="dad"
              height={300}
              width={250}
            />
             <img
              className="internet"
              src={internet} 
              alt="internet"
              height={300}
              width={250}
            />
             <img
              className="shed"
              src={shed} 
              alt="shed"
              height={300}
              width={250}
            />
             <img
              className="promise"
              src={promise} 
              alt="promise"
              height={300}
              width={250}
            />
             <img
              className="stand"
              src={stand} 
              alt="stand"
              height={300}
              width={250}
            />
             <img
              className="pry"
              src={pry} 
              alt="pry"
              height={300}
              width={250}
            />
             <img
              className="wearecops"
              src={wearecops} 
              alt="wearecops"
              height={300}
              width={250}
            />
             <img
              className="cop"
              src={cop} 
              alt="cop"
              height={300}
              width={250}
            />
           </div> 

           
           <p className='blurb'>All drawn with tracpad into a .psd file.
            Not a lot of care is taken with the line
            quality, but instead more care is put into
            composing the images. Curating the items and the vibez ya know? 
            The material these illustrations aim to address stems from the
            aggression of the human condition. 
            It seems like a better option to laugh at the dystopic novel we find ourselves
            in than to sit around and get scared.
            Inspiration: <a href="https://bandofnothing.com" target="_blank" rel="noopener noreferrer">Nothing</a>.
           </p>
    </div>    
  )
}
