import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import Footer from '../components/footer'
import './city-new-delhi.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const CityNewDelhi = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="city-new-delhi-container">
      <Helmet>
        <title>city-new-delhi - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="city-new-delhi - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="city-new-delhi-container1">
        <div className="city-new-delhi-btn-group">
          <Link to="/" className="city-new-delhi-navlink button">
            HOME
          </Link>
          <button className="city-new-delhi-button button">/</button>
          <Link to="/plant-tree" className="city-new-delhi-navlink1 button">
            PLANT TREE
          </Link>
          <button className="city-new-delhi-button1 button">/</button>
          <button className="city-new-delhi-button2 button">NEW DELHI</button>
        </div>
      </div>
      <div className="city-new-delhi-container2">
        <Component1 rootClassName="component1-root-class-name1"></Component1>
        <div className="city-new-delhi-container3">
          <p className="city-new-delhi-text">
            <span className="city-new-delhi-text01">OVERVIEW -</span>
            <br className="city-new-delhi-text02"></br>
            <br className="city-new-delhi-text03"></br>
            <span className="city-new-delhi-text04">New Delhi</span>
            <span className="city-new-delhi-text05">
              {' '}
              is the capital city of India facing environmental challenges such
              as air pollution, water scarcity, and deforestation. Tree
              plantation is essential to combat these issues and promote
              sustainable living by purifying air, conserving water, and
              maintaining moisture levels. The Delhi government has taken
              initiatives to promote tree plantation, such as the &quot;Green
              Delhi&quot; campaign and creating a city forest of 1,000 acres.
              Donating towards tree plantation in New Delhi is an excellent way
              to contribute towards creating a greener and healthier environment
              for the city&apos;s residents.
            </span>
            <br className="city-new-delhi-text06"></br>
            <br className="city-new-delhi-text07"></br>
            <span className="city-new-delhi-text08">WHAT YOU GET -</span>
            <br className="city-new-delhi-text09"></br>
            <br className="city-new-delhi-text10"></br>
            <span className="city-new-delhi-text11">
              A personalized tree certificate (
            </span>
            <a
              href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
              target="_blank"
              rel="noreferrer noopener"
              className="city-new-delhi-link"
            >
              Certificate Sample
            </a>
            <span className="city-new-delhi-text12">
              ) to say thanks for your donation. We’ll also send you reports on
              our new Delhi project, so you can track the impact your trees are
              having on the community and environment.
            </span>
            <br className="city-new-delhi-text13"></br>
          </p>
          <Link
            to="/payment-gatway"
            id="PLANT_A_TREE"
            className="city-new-delhi-navlink2 button"
          >
            DONATE
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CityNewDelhi
