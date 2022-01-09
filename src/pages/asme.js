import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/tufts-logo-no-words.png"
import img2 from "../images/asme/tufts-sketches.png"
import img3 from "../images/asme/tufts-draft.png"
import img4 from "../images/asme/tufts-logo-final.png"

//change text below
const section1 = {
  text:"I was asked by a friend to create the logo for the Tufts ASME club while incorperating the Tufts mascot. This was a really fun one to do!",
  img:img1,
}
const section2 = {
  text:"I started off by drawing anything that came to mind. My artclass taught me that at this stage, it was quantity over quality. My client happened to like a drawing from this batch of ideation.",
  img:img2,
}
const bigImg = {
  big1:img3,
  big2:img4
}
const description={
  date:"4-28-21",
  context:"Logo for Tufts American Society of Mechanical Engineers"
}

export default function Asme() {
  return (
    <div class="pageStyle">
      <FadeIn delay={100} transitionDuration={500}>
        <div class="header">
          <a class="backButton" href="/">
            <img class="arrow" src={arrow} alt="back arrow"></img>
            Back
          </a>
        </div>
        <div class="title">
          Tufts ASME
        </div>
        <div class="desc">
          <div>
            {description.date}
          </div>
          <div>
            {description.context}
          </div>
        </div>
        <div class="content">
          <div class="image-holder">
            <img class="image-style" src={section1.img} alt="screenshot of small logo"></img>
          </div>
          <div class="text-holder">
            <div class="text-style">
              {section1.text}
            </div>
          </div>
        </div>
        <div class="content">
          <div class="text-holder after-text">
            <div class="text-style">
              {section2.text}
            </div>
          </div>
          <div class="image-holder">
            <img class="image-style" src={section2.img} alt="drafts"></img>
          </div>
        </div>
      </FadeIn>
      <div class="content">
        <div>
          <img class="full-image" width={1000} src={bigImg.big1} alt="final"></img>
        </div>
        <div>
          <img class="full-image" width={1000} src={bigImg.big2} alt="me in front of Sakana"></img>
        </div>
      </div>
      <div class="header bottom">
        <a class="backButton" href="/">
          <img class="arrow" src={arrow} alt="back arrow"></img>
          Back to home page
        </a>
      </div>
      <div class="aboutSection">
        <div class="aboutTitle">
            About Me
        </div>
        <div class="aboutText">
            Thank you for checking out my design portfolio! 
            My name is Yuri Chen and I'm currently a junior at the University of Michigan. 
            I'm studing Computer Science and Art and Design. I'm really interested in combining these two interests of mine. 
            Check out my <a href="yurichen.me"> personal website</a> for more of my projects! 
        </div>
      </div>
    </div>
  )
}