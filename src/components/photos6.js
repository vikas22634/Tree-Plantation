import React from 'react'

import PropTypes from 'prop-types'

import './photos6.css'

const PHOTOS6 = (props) => {
  return (
    <div className="photos6-photos6">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos6-image"
      />
      <h2 className="photos6-text">{props.heading}</h2>
    </div>
  )
}

PHOTOS6.defaultProps = {
  image_src:
    'https://arbordayblog.org/wp-content/uploads/2021/08/arbor-day-2021-east-end-park_51068858473_o-520x400.jpg',
  heading: 'NEW DELHI',
  image_alt: 'image',
}

PHOTOS6.propTypes = {
  image_src: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
}

export default PHOTOS6
