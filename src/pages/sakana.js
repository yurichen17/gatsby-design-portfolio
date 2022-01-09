import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/sakana.png"
import img2 from "../images/sakana/sakana_logo_drafts.png"
import img3 from "../images/sakana/sakana_final.png"
import img4 from "../images/sakana/me.jpg"

//change text below
const section1 = {
  text:"I created a logo for a resturant. This was an amazing experience and opportunity and I really enjoyed designing Sakana's Logo.",
  img:img1,
}
const section2 = {
  text:"The graphic design class I took in high school really helped me with this project. I first started out with a bunch of ideation.",
  img:img2,
}
const bigImg = {
  big1:img3,
  big2:img4
}
const description={
  date:"6-23-18",
  context:"Logo for Sakana Resturant in Cambridge, MA"
}

export default function Sakana() {
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
          Sakana
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
          <img class="full-image" src={bigImg.big1} alt="final"></img>
        </div>
        <div>
          <img class="full-image" width={1000} src={bigImg.big2} alt="me in front of Sakana"></img>
        </div>
      </div>
      <div class="content">
        <div class="text-holder">
          <div class="text-style">
          <a href="https://www.google.com/maps/place/Sakana+Sushi/@42.369325,-71.1129537,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37777a999179d:0xcab6310a393ef524!8m2!3d42.369325!4d-71.110765">Click here</a> to visit Sakana in the Boston area!
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