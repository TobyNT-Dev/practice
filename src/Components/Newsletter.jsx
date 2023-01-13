import React from 'react'
import "./Newsletter.css"
import NewsLetter from "../Assets/Images/newsletterbg.jpg"
import { FaEnvelope } from "react-icons/fa";

export const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="news-content">
        <h3>Tilmeld dig vores nyhedsbrev</h3>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
        <span><FaEnvelope/></span><input type="text" /><button>TILMELD</button>
      </div>
      <img src={NewsLetter} alt="Newsletter bread picture background" />
    </div>
  )
}
