import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'
import Component4 from '../components/component4'
import Footer from '../components/footer'
import './plant-tree.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const PlantTree = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="plant-tree-container">
      <Helmet>
        <title>plant-tree - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="plant-tree - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="plant-tree-container1">
        <div className="plant-tree-btn-group">
          <Link to="/" className="plant-tree-navlink button">
            HOME
          </Link>
          <button className="plant-tree-button button">/</button>
          <button className="plant-tree-button1 button">PLANT TREE</button>
        </div>
      </div>
      <div className="plant-tree-gallery">
        <h1 className="plant-tree-text">WHERE WE PLANT</h1>
        <span className="plant-tree-text1">
          <span className="plant-tree-text2">TREE PLANTATION</span>
          <span className="plant-tree-text3">
            {' '}
            is a non-profit environmental charity on a mission of region
            reforestation. We plant trees across INDIA.Select one of our cities
            to learn more about our tree planting projects and help to support
            reforestation.
          </span>
        </span>
        <div className="plant-tree-container2">
          <Link to="/city-new-delhi">
            <Component1 className="plant-tree-component1"></Component1>
          </Link>
          <Link to="/city-new-faridabad">
            <Component2 className="plant-tree-component2"></Component2>
          </Link>
          <Link to="/city-new-gurgaon">
            <Component3 className="plant-tree-component3"></Component3>
          </Link>
          <Link to="/city-new-noida">
            <Component4 className="plant-tree-component4"></Component4>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default PlantTree
