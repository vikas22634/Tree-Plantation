import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component3 from '../components/component3'
import Footer from '../components/footer'
import './city-new-gurgaon.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const CityNewGurgaon = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="city-new-gurgaon-container">
      <Helmet>
        <title>city-new-gurgaon - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="city-new-gurgaon - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="city-new-gurgaon-container1">
        <div className="city-new-gurgaon-btn-group">
          <Link to="/" className="city-new-gurgaon-navlink button">
            HOME
          </Link>
          <button className="city-new-gurgaon-button button">/</button>
          <Link to="/plant-tree" className="city-new-gurgaon-navlink1 button">
            PLANT TREE
          </Link>
          <button className="city-new-gurgaon-button1 button">/</button>
          <button className="city-new-gurgaon-button2 button">GURGAON</button>
        </div>
      </div>
      <div className="city-new-gurgaon-container2">
        <Component3 rootClassName="component3-root-class-name"></Component3>
        <div className="city-new-gurgaon-container3">
          <p className="city-new-gurgaon-text">
            <span className="city-new-gurgaon-text01">OVERVIEW -</span>
            <br className="city-new-gurgaon-text02"></br>
            <br className="city-new-gurgaon-text03"></br>
            <span className="city-new-gurgaon-text04">Gurgaon</span>
            <span className="city-new-gurgaon-text05">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="city-new-gurgaon-text06">
              is a fast-growing city in India, but rapid urbanization and
              industrialization have led to environmental challenges such as air
              pollution, water scarcity, and a decline in green cover.
              That&apos;s why tree plantation initiatives are crucial to restore
              the ecological balance of the city. By donating to tree plantation
              efforts in Gurgaon, you can help improve air quality, conserve
              water, provide shade and cooling, and enhance biodiversity. Your
              contribution can make a significant impact on the environment and
              quality of life for the city&apos;s residents. Join us in our
              mission to create a greener and healthier Gurgaon for all.
            </span>
            <br className="city-new-gurgaon-text07"></br>
            <br className="city-new-gurgaon-text08"></br>
            <span className="city-new-gurgaon-text09">WHAT YOU GET -</span>
            <br className="city-new-gurgaon-text10"></br>
            <br className="city-new-gurgaon-text11"></br>
            <span className="city-new-gurgaon-text12">
              A personalized tree certificate (
            </span>
            <a
              href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
              target="_blank"
              rel="noreferrer noopener"
              className="city-new-gurgaon-link"
            >
              Certificate Sample
            </a>
            <span className="city-new-gurgaon-text13">
              ) to say thanks for your donation. We’ll also send you reports on
              our new Delhi project, so you can track the impact your trees are
              having on the community and environment.
            </span>
            <br className="city-new-gurgaon-text14"></br>
          </p>
          <Link
            to="/payment-gatway"
            id="PLANT_A_TREE"
            className="city-new-gurgaon-navlink2 button"
          >
            DONATE
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CityNewGurgaon
