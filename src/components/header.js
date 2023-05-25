import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'
import { useAuth0 } from "@auth0/auth0-react";

const Header = (props) => {

  const { loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="header-image"
        />
      </Link>
      <div className="header-container">
        <div className="header-container1">
          <Link to="/plant-tree" className="header-button button">
            {props.Button}
          </Link>
          <Link to="/get-involve" className="header-navlink1 button">
            {props.button}
          </Link>
          <Link to="/why-tree" className="header-navlink2 button">
            {props.button1}
          </Link>
          <Link to="/about-us" className="header-navlink3 button">
            {props.button2}
          </Link>
          <Link to="/payment-gatway" className="header-navlink4 button">
            {props.button3}
          </Link>
          {isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="header-button2 buttonheader-button1 button">{props.button5}</button>
          ):(
          <button onClick={() => loginWithRedirect()}  className="header-button1 button">{props.button4}</button>            
          )}


{isAuthenticated && (
            
              <img src={user.picture} className="header-container2" />
            
            )}
          {/* <button className="header-button1 button">{props.button4}</button>
          <button className="header-button2 button">{props.button5}</button> */}
          {/* <div className="header-container2"></div> */}
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  button4: 'LOGIN',
  button: 'GET INVOLVE',
  rootClassName: '',
  image_alt: 'logo',
  button1: 'LEARN',
  button3: 'DONATE',
  button2: 'ABOUT US',
  button5: 'LOG OUT',
  Button: 'PLANT TREE',
  image_src: '/playground_assets/logo-b8f-200h.png',
}

Header.propTypes = {
  button4: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  button1: PropTypes.string,
  button3: PropTypes.string,
  button2: PropTypes.string,
  button5: PropTypes.string,
  Button: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
