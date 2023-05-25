import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component4 from '../components/component4'
import Footer from '../components/footer'
import './city-new-noida.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const CityNewNoida = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="city-new-noida-container">
      <Helmet>
        <title>city-new-noida - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="city-new-noida - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="city-new-noida-container1">
        <div className="city-new-noida-btn-group">
          <Link to="/" className="city-new-noida-navlink button">
            HOME
          </Link>
          <button className="city-new-noida-button button">/</button>
          <Link to="/plant-tree" className="city-new-noida-navlink1 button">
            PLANT TREE
          </Link>
          <button className="city-new-noida-button1 button">/</button>
          <button className="city-new-noida-button2 button">NOIDA</button>
        </div>
      </div>
      <div className="city-new-noida-container2">
        <Component4 rootClassName="component4-root-class-name"></Component4>
        <div className="city-new-noida-container3">
          <p className="city-new-noida-text">
            <span className="city-new-noida-text01">OVERVIEW -</span>
            <br className="city-new-noida-text02"></br>
            <br className="city-new-noida-text03"></br>
            <span className="city-new-noida-text04">Noida</span>
            <span className="city-new-noida-text05">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="city-new-noida-text06">
              {' '}
              is a city that has undergone rapid industrialization and
              urbanization, resulting in a range of environmental issues such as
              air pollution, water scarcity, and depletion of green cover. To
              address these concerns, several tree plantation initiatives are
              being undertaken in Noida to restore the ecological balance of the
              city and improve the quality of life for its citizens. By
              contributing to tree plantation efforts in Noida, you can play a
              vital role in creating a greener and healthier environment for
              everyone. Your donation can go a long way in planting more trees
              in the city, which will significantly impact the environment and
              the community positively. Let&apos;s work together to create a
              better and sustainable future for Noida.
            </span>
            <br className="city-new-noida-text07"></br>
            <br className="city-new-noida-text08"></br>
            <span className="city-new-noida-text09">WHAT YOU GET -</span>
            <br className="city-new-noida-text10"></br>
            <br className="city-new-noida-text11"></br>
            <span className="city-new-noida-text12">
              A personalized tree certificate (
            </span>
            <a
              href="https://images-platform.99static.com/uwFxpJtHFabd0R9glURtRxym5fQ=/0x0:1594x1594/500x500/top/smart/99designs-contests-attachments/63/63059/attachment_63059708"
              target="_blank"
              rel="noreferrer noopener"
              className="city-new-noida-link"
            >
              Certificate Sample
            </a>
            <span className="city-new-noida-text13">
              ) to say thanks for your donation. We’ll also send you reports on
              our new Delhi project, so you can track the impact your trees are
              having on the community and environment.
            </span>
            <br className="city-new-noida-text14"></br>
          </p>
          <Link
            to="/payment-gatway"
            id="PLANT_A_TREE"
            className="city-new-noida-navlink2 button"
          >
            DONATE
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CityNewNoida
