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
    <div class="pageStyle">
      <FadeIn delay={100} transitionDuration={500}>
        <div class="header">
          <a class="backButton" href="/">
            <img class="arrow" src={arrow} alt="back arrow"></img>
            Back
          </a>
        </div>
        <div class="title">
          Illustrations for Yoga Book
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
          <img class="full-image" width={1500} src={bigImg.big1} alt="final"></img>
        </div>
        <div>
          <img class="full-image" width={1500} src={bigImg.big2} alt="me in front of Sakana"></img>
        </div>
      </div>
      <div class="content">
        <div class="text-holder">
          <div class="text-style">
          <a href="https://www.amazon.com/Attachment-Based-Yoga-Meditation-Trauma-Recovery/dp/0393709906">Click here</a> to buy the book!
          </div>
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