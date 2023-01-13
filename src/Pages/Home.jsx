import React from 'react'
import { Slideshow } from '../Components/Slideshow'
import { Newsletter } from '../Components/Newsletter'
import "./Home.css"
import Article1 from "../Assets/Images/article.jpg"
import Article2 from "../Assets/Images/article2.jpg"
import Article3 from "../Assets/Images/article3.jpg"

export const Home = () => {
  return (
    <div className="home-page">
      <header>
        <Slideshow />
      </header>
        <h3 className="content-top">Vi skaber lækkert brød!</h3>
        <p className="articles-header">Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
        <article className="article1">
          <img src={Article1} alt="" />
          <h3>KREATIVITET DYRKES</h3>
          <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor</p>
        </article>
        <article className="article2">
          <img src={Article2} alt="" />
          <h3>VI ELSKER BRØD</h3>
          <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor</p>
        </article>
        <article className="article3">
          <img src={Article3} alt="" />
          <h3>SANS FOR DETALJER</h3>
          <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor</p>
        </article>
        <Newsletter />
    </div>
  )
}