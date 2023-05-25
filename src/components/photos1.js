import React from 'react'

import PropTypes from 'prop-types'

import './photos1.css'

const PHOTOS1 = (props) => {
  return (
    <div className={`photos1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos1-image"
      />
      <h2 className="photos1-text">{props.title}</h2>
    </div>
  )
}

PHOTOS1.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  title: 'NEW DELHI',
  image_src:
    'https://www.greenbeltmovement.org/sites/greenbeltmovement.org/files/DSC01941.JPG',
}

PHOTOS1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default PHOTOS1
