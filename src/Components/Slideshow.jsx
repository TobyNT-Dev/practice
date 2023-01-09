import React, { useEffect, useState, useRef } from 'react'
import "./Slideshow.css"
import Bread1 from '../Assets/Images/slide1.jpg'
import Bread2 from '../Assets/Images/slide2.jpg'
import Bread3 from '../Assets/Images/slide3.jpg'
import Arrow from '../Assets/Images/chevron.png'

export const Slideshow = () => {
    const [slide, setSlide] = useState(1)
    const divRef = useRef(null)

    function slideright() {
        if (slide < 3) {
            setSlide(state => state + 1)
        }
        else {
            setSlide(1)
        }
    }
    function slideleft() {
        if (slide > 1) {
            setSlide(slide - 1)
        }
        else {
            setSlide(3)
        }
    }
    
    useEffect(() => {
        console.log(slide)
        switch(slide) {
            case 1:
            divRef.current.style.left = "0%";
            break;
            case 2:      
            divRef.current.style.left = "-100%";
            break;
            case 3:
            divRef.current.style.left = "-200%";
              break;
            default:
            return
        }
    },[slide])

    return (
    <div className="slideshow">
        <h2>Vi elsker at bage brød</h2>
        <img className='leftArrow arrow' onClick={ () => slideleft() } src={ Arrow } alt="" />
        <img className='rightArrow arrow' onClick={ () => slideright() } src={ Arrow } alt="" />
        <div className="image-box" ref={divRef}>
            <img className="img1" src={ Bread1 } alt="" />
            <img className="img2" src={ Bread2 } alt="" />
            <img className="img3" src={ Bread3 } alt="" />
        </div>
    </div>
  )
}
