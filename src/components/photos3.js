import React from 'react'

import PropTypes from 'prop-types'

import './photos3.css'

const PHOTOS3 = (props) => {
  return (
    <div className="photos3-gallery-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos3-image"
      />
      <h2 className="photos3-text">{props.heading}</h2>
    </div>
  )
}

PHOTOS3.defaultProps = {
  image_alt: 'image',
  image_src:
    'https://www.texastrees.org/wp-content/uploads/2022/08/IMG_5441-selected-2.jpg',
  heading: 'GURGAON',
}

PHOTOS3.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default PHOTOS3
