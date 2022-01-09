import * as React from "react"
import FadeIn from 'react-fade-in';
import "../css/subpages.css"
import arrow from "../images/arrow.png"

//import images used
import img1 from "../images/paperbag.png"
import img2 from "../images/artwork/arch_final.png"
import img3 from "../images/artwork/sharpener.png"
import img4 from "../images/artwork/ideas.png"
import img5 from "../images/artwork/draft.png"
import img6 from "../images/artwork/firetrunk.png"

//change text below
const section1 = {
  text:"I'm minoring in Art and Design with a focus on UI/UX. With my love for art, I knew I had to continue making art in college as well. Here are some of my favorite works so far!",
  img:img1,
}
const section2 = {
  text:"This piece is about time. It is about the contrast of movable and unmovable objects. I drew this during the pandemic, expressing how I was stuck to my desk chair during that year.",
  img:img2,
}
const section3 = {
  a:img4,
  b:img5,
}
const bigImg = {
  big1:img3,
  big2:img6
}
const description={
  date:"2021",
  context:"Artwork from classes"
}

export default function Artwork() {
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
          Artwork
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
        <div class="content">
          <div>
            <img class="full-image" src={bigImg.big1} alt="final"></img>
          </div>
        </div>
        <div class="content">
        <div class="image-holder">
            <img class="image-style" src={section3.a} alt="drafts"></img>
          </div>
          <div class="image-holder">
            <img class="image-style" src={section3.b} alt="drafts"></img>
          </div>
        </div>
      </FadeIn>
      <div class="content">
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