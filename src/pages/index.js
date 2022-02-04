import * as React from "react"
import Helmet from 'react-helmet';
import FadeIn from 'react-fade-in';
import "@fontsource/allison"
import "@fontsource/kite-one"
import "../css/home.css"
//change cover pictures below
import logo from "../images/lily.png"
import img1 from "../images/snipit.png"
import img2 from "../images/find-fit.png"
import img3 from "../images/sakana.png"
import img4 from "../images/shouldercradle2.jpg"
import img5 from "../images/tufts-logo-no-words.png"
import img6 from "../images/paperbag.png"

//pages
const pages = [
    {
        text:"Snipits",
        url:"./snipits",
        photo:img1
    },
    {
        text:"Find Fit",
        url:"./find",
        photo:img2
    },
    {
        text:"Sakana Logo",
        url:"./sakana",
        photo:img3
    },
    {
        text:"Yoga Illustrations",
        url:"./yoga",
        photo:img4
    },
    {
        text:"ASME Logo",
        url:"./asme",
        photo:img5
    },
    {
        text:"Class Artwork",
        url:"./artwork",
        photo:img6
    }
]


const IndexPage = () => {
    return (
        <main className="pageStyle">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Design Portfolio</title>
                <meta property='og:image' content={ logo } />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content="Yuri's Portfolio" />
                <meta property='og:description' content="This website displays some of Yuri's projects that incorporates some type of design by her." />
                <meta property='og:url' content='https://yuridesignportfolio.gatsbyjs.io/' />
                <meta property='og:updated_time' content='2022-01-14' />
            </Helmet>
            <FadeIn delay={140} transitionDuration={1000}>
                <img className="logoStyle" src={logo}></img>
                <div className="titleStyle">
                    Yuri Chen
                </div>
                <div className="buttonLayout">
                    {pages.map(page => (
                        <a className="wrap" href={`${page.url}`} key={page.url}>
                            <div className="hidden">
                                <p>{page.text}</p>
                            </div>
                            <img className="cover" src={page.photo}></img>
                        </a>
                    ))}
                </div>
                <div className="aboutSection">
                    <div className="aboutTitle">
                        About Me
                    </div>
                    <div className="aboutText">
                        Thank you for checking out my design portfolio! 
                        My name is Yuri Chen and I'm currently a junior at the University of Michigan. 
                        I'm studing Computer Science and Art and Design. I'm really interested in combining these two interests of mine. 
                        Check out my <a href="https://yurichen.me"> personal website</a> for more of my projects! 
                    </div>
                </div>
            </FadeIn>
        </main>
    )
}

export default IndexPage

