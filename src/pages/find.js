import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/find-fit.png"
import img2 from "../images/findfit/figma.png"
import img3 from "../images/findfit/example.png"
import img4 from "../videos/findfit-demo.mp4"

//change text below
const section1 = {
  text:"I worked in a team of 4 in my User Interface Design class for the final project. Our project was a website that dynamically connected users to their best matched excercise regime by scoring their answers to our system.",
  img:img1,
}
const section2 = {
  text:"We did a lot of planning in Figma, and used it to decide how we would design our website.",
  img:img2,
}
const bigImg = {
  big1:img3,
  big2:img4
}
const description={
  date:"12-6-21",
  context:"Final project for User Interface Design class."
}

export default function Find() {
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
          Find-fit
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
            <img className="image-style" src={section1.img} alt="screenshot of findfit"></img>
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
            <img className="image-style" src={section2.img} alt="figma work"></img>
          </div>
        </div>
      </FadeIn>
      <div className="content">
        <div>
          <img className="full-image" width={1500} src={bigImg.big1} alt="example regime"></img>
        </div>
        <div>
          <video className="full-image" width={1500} controls>
            <source src={img4} type="video/mp4" ></source>
            Your browser does not support the video tag.
          </video>
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