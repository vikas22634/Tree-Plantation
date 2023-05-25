import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'
import Component4 from '../components/component4'
import Footer from '../components/footer'
import './home.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="home-container">
      <Helmet>
        <title>tree-plantation</title>
        <meta property="og:title" content="tree-plantation" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-heading">
            <span className="home-text">
              LET&apos;S
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text01"></br>
            <span className="home-text02">MAKE OUR </span>
            <span className="home-text03">REGION</span>
            <br className="home-text04"></br>
            <span className="home-text05">GREENY</span>
            <span className="home-text06"> !</span>
            <span className="home-text07">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text08">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="home-text09"></br>
            <span className="home-text10">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
          <span className="home-text11">
            <span>SUPPORT REFORESTATION OF INDIA ON THIS EARTH MONTHS.</span>
            <br></br>
            <span>YOUR DONATION WILL HELP TO OUR VISION !</span>
          </span>
          <div className="home-btn-group">
            <Link to="/plant-tree" className="home-navlink button">
              PLANT A TREE
            </Link>
            <Link to="/become-a-volunteer" className="home-navlink1 button">
              BECOME A VOLUNTEER
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/wp4627770-1500h.jpg"
          loading="eager"
          className="home-image"
        />
      </div>
      <div className="home-banner">
        <h1 className="home-text15">OUR MISSION</h1>
        <span className="home-text16">
          Through our platform, we hope to create a world in which each person
          can actively help the environment and lessen the effects of climate
          change. We work hard to motivate people to take action and spread
          knowledge of the value of conserving the environment and natural
          resources. The end result of our efforts is to leave behind a legacy
          of environmental care for future generations.
        </span>
        <Link to="/about-us" className="home-navlink2 button">
          Read More
        </Link>
      </div>
      <div className="home-gallery">
        <h1 className="home-text17">WHERE WE PLANT</h1>
        <span className="home-text18">
          <span className="home-text19">TREE PLANTATION</span>
          <span className="home-text20">
            {' '}
            is a non-profit environmental charity on a mission of region
            reforestation. We plant trees across INDIA.Select one of our cities
            to learn more about our tree planting projects and help to support
            reforestation.
          </span>
        </span>
        <div className="home-container2">
          <Link to="/city-new-delhi">
            <Component1 className="home-component1"></Component1>
          </Link>
          <Link to="/city-new-faridabad">
            <Component2 className="home-component2"></Component2>
          </Link>
          <Link to="/city-new-gurgaon">
            <Component3 className="home-component3"></Component3>
          </Link>
          <Link to="/city-new-noida">
            <Component4 className="home-component4"></Component4>
          </Link>
        </div>
      </div>
      <div className="home-banner1">
        <h1 className="home-text21">EARTH MONTH EVENTS</h1>
        <span className="home-text22">
          WANT TO GET YOUR HANDS DIRTY AT A LOCAL EVENT?
        </span>
        <form action= "https://formspree.io/f/xpzekvqe" method ="POST">
        <div className="home-container3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email here..."
            autoComplete="email"
            className="home-textinput input"
          />
          <button type="submit" className="home-button button">
            Subscribe
          </button>
        </div>
        </form>
      </div>
      <div className="home-hero1">
        <h3 className="home-text23">
          Join us in growing a sustainable future for generations to come,
          become a business partner in our mission to plant more trees!
        </h3>
        <Link to="/become-a-businesss-partner" className="home-link button">
          BECOME A BUSINESS PARTNER
        </Link>
      </div>
      <div className="home-banner2">
        <h1 className="home-text24">REFORESTATION</h1>
        <span className="home-text25">WE PLANTS TREES ACORSS INDIA.</span>
        <div className="home-btn-group1">
          <Link to="/why-tree" className="home-navlink7 button">
            WHY TREE ?
          </Link>
          <Link to="/plant-tree" className="home-navlink8 button">
            PLANT A TREE
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
