import React from 'react'

import PropTypes from 'prop-types'

import './photos2.css'

const PHOTOS2 = (props) => {
  return (
    <div className="photos2-gallery-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos2-image"
      />
      <h2 className="photos2-text">{props.heading}</h2>
    </div>
  )
}

PHOTOS2.defaultProps = {
  image_alt: 'image',
  image_src: 'https://static.toiimg.com/photo/msid-77846042/77846042.jpg',
  heading: 'FARIDABAD',
}

PHOTOS2.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  heading: PropTypes.string,
}

export default PHOTOS2
