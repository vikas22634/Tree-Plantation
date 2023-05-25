import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component2 from '../components/component2'
import Footer from '../components/footer'
import './city-new-faridabad.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const CityNewFaridabad = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="city-new-faridabad-container">
      <Helmet>
        <title>city-new-faridabad - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="city-new-faridabad - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="city-new-faridabad-container1">
        <div className="city-new-faridabad-btn-group">
          <Link to="/" className="city-new-faridabad-navlink button">
            HOME
          </Link>
          <button className="city-new-faridabad-button button">/</button>
          <Link to="/plant-tree" className="city-new-faridabad-navlink1 button">
            PLANT TREE
          </Link>
          <button className="city-new-faridabad-button1 button">/</button>
          <button className="city-new-faridabad-button2 button">
            FARIDABAD
          </button>
        </div>
      </div>
      <div className="city-new-faridabad-container2">
        <Component2 rootClassName="component2-root-class-name"></Component2>
        <div className="city-new-faridabad-container3">
          <p className="city-new-faridabad-text">
            <span className="city-new-faridabad-text01">OVERVIEW -</span>
            <br className="city-new-faridabad-text02"></br>
            <br className="city-new-faridabad-text03"></br>
            <span className="city-new-faridabad-text04">Faridabad </span>
            <span className="city-new-faridabad-text05">
              is a city in Haryana, India, with a significant decline in its
              tree cover due to industrialization and urbanization. Tree
              plantation initiatives aim to restore the city&apos;s ecological
              balance and enhance its environment, improving air quality,
              conserving water, providing habitat for wildlife, and reducing
              noise pollution. By donating to tree plantation efforts in
              Faridabad, you can contribute towards these initiatives and have a
              positive impact on the environment and community.
            </span>
            <br className="city-new-faridabad-text06"></br>
            <br className="city-new-faridabad-text07"></br>
            <span className="city-new-faridabad-text08">WHAT YOU GET -</span>
            <br className="city-new-faridabad-text09"></br>
            <br className="city-new-faridabad-text10"></br>
            <span className="city-new-faridabad-text11">
              A personalized tree certificate (
            </span>
            <a
              href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
              target="_blank"
              rel="noreferrer noopener"
              className="city-new-faridabad-link"
            >
              Certificate Sample
            </a>
            <span className="city-new-faridabad-text12">
              ) to say thanks for your donation. We’ll also send you reports on
              our new Delhi project, so you can track the impact your trees are
              having on the community and environment.
            </span>
            <br className="city-new-faridabad-text13"></br>
          </p>
          <Link
            to="/payment-gatway"
            id="PLANT_A_TREE"
            className="city-new-faridabad-navlink2 button"
          >
            DONATE
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CityNewFaridabad
