import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/shouldercradle2.jpg"
import img2 from "../images/yoga/anjalimundra1.jpg"
import img3 from "../images/yoga/anjalimundra2.jpg"
import img4 from "../images/yoga/seatedtwist1.jpg"

//change text below
const section1 = {
  text:"This is another amazing oportunity for me. As a 15 year old at the time, I was asked to create illustrations for Deirdre Fay. There was a lot of pressure and I almost didn't take the job, but I'm glad I did!",
  img:img1,
}
const section2 = {
  text:"This was my first time communicating with a client for a project, and I learned a lot from this experience.",
  img:img2,
}
const bigImg = {
  big1:img3,
  big2:img4
}
const description={
  date:"7-25-16",
  context:"Illustrations for Attachment-Based Yoga & Meditation for Trauma Recovery"
}

export default function Yoga() {
  return (
    <div className="pageStyle">
      <FadeIn delay={100} transitionDuration={500}>
        <div className="header">
          <a className="backButton" href="/">
            <img className="arrow" src={arrow} alt="back arrow"></img>
            Back
          </a>
        </div>
        <div className="title">
          Illustrations for Yoga Book
        </div>
        <div className="desc">
          <div>
            {description.date}
          </div>
          <div>
            {description.context}
          </div>
        </div>
        <div className="content">
          <div className="image-holder">
            <img className="image-style" src={section1.img} alt="screenshot of small logo"></img>
          </div>
          <div className="text-holder">
            <div className="text-style">
              {section1.text}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text-holder after-text">
            <div className="text-style">
              {section2.text}
            </div>
          </div>
          <div className="image-holder">
            <img className="image-style" src={section2.img} alt="drafts"></img>
          </div>
        </div>
      </FadeIn>
      <div className="content">
        <div>
          <img className="full-image" width={1500} src={bigImg.big1} alt="final"></img>
        </div>
        <div>
          <img className="full-image" width={1500} src={bigImg.big2} alt="more yoga drawings"></img>
        </div>
      </div>
      <div className="content">
        <div className="text-holder">
          <div className="text-style">
          <a href="https://www.amazon.com/Attachment-Based-Yoga-Meditation-Trauma-Recovery/dp/0393709906">Click here</a> to buy the book!
          </div>
        </div>
      </div>
      <div className="header bottom">
        <a className="backButton" href="/">
          <img className="arrow" src={arrow} alt="back arrow"></img>
          Back to home page
        </a>
      </div>
      <div className="aboutSection">
        <div className="aboutTitle">
            About Me
        </div>
        <div className="aboutText">
            Thank you for checking out my design portfolio! 
            My name is Yuri Chen and I'm currently a junior at the University of Michigan. 
            I'm studing Computer Science and Art and Design. I'm really interested in combining these two interests of mine. 
            Check out my <a href="yurichen.me"> personal website</a> for more of my projects! 
        </div>
      </div>
    </div>
  )
}