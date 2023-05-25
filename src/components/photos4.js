import React from 'react'

import PropTypes from 'prop-types'

import './photos4.css'

const PHOTOS4 = (props) => {
  return (
    <div className={`photos4-photos4 ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos4-image"
      />
      <h2 className="photos4-text">{props.heading}</h2>
    </div>
  )
}

PHOTOS4.defaultProps = {
  rootClassName: '',
  heading: 'NOIDA',
  image_alt: 'image',
  image_src:
    'https://s7d1.scene7.com/is/image/kyndryl/otp_3423_16x9?qlt=85&wid=1024&ts=1663015657583&dpr=off',
}

PHOTOS4.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default PHOTOS4
