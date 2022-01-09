import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/snipit.png"
import img2 from "../images/snipit/scisors-forever.gif"
import img3 from "../images/snipit/snipits.jpg"
import img4 from "../videos/snip-demo.mp4"

//change text below
const section1 = {
  text:"For a take-home assignment, I created a small social media site where anyone can post small notes for all to see. I had a lot of fun creating a theme of snipping notes for the website.",
  img:img1,
}
const section2 = {
  text:"When the site loads and when the someone submits a post, the scissors animate snipping the note to appear below.",
  img:img2,
}
const bigImg = {
  big1:img3,
  big2:img4
}
const description={
  date:"12-2-21",
  context:"A cute website to store small snipits of information."
}

export default function Snipits() {
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
          Snipits
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
            <img class="image-style" src={section1.img} alt="screenshot of snipits"></img>
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
            <img class="image-style" src={section2.img} alt="scissors gif"></img>
          </div>
        </div>
      </FadeIn>
      <div class="content">
        <div>
          <img class="full-image" src={bigImg.big1} alt="draft design"></img>
        </div>
        <div>
          <video class="full-image" width={1500} controls>
            <source src={img4} type="video/mp4" ></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="content">
          <div class="text-holder">
            <div class="text-style">
            <a href="https://yurichen.me/pages/projects/snipits.html">Click here</a> for more details about this project
            </div>
          </div>
          <div class="text-holder">
            <div class="text-style">
            <a href="https://snipit.pages.dev/">Click here</a> to check out the website!
            </div>
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