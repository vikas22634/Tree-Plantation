import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './privacy-policy.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const PrivacyPolicy = (props) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth',});
  },[pathname])
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>privacy-policy - TREE--PLANTATION</title>
        <meta
          property="og:title"
          content="privacy-policy - TREE--PLANTATION"
        />
      </Helmet>
      <Header></Header>
      <div className="privacy-policy-container1">
        <div className="privacy-policy-btn-group">
          <Link to="/" className="privacy-policy-navlink button">
            HOME
          </Link>
          <button className="privacy-policy-button button">/</button>
          <button className="privacy-policy-button1 button">
            PRIVACY POLICE
          </button>
        </div>
      </div>
      <div className="privacy-policy-container2"></div>
      <Footer></Footer>
      <Link to="/" className="privacy-policy-navlink1">
        <div className="privacy-policy-container3"></div>
      </Link>
    </div>
  )
}

export default PrivacyPolicy
