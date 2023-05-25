import React from 'react'

import PropTypes from 'prop-types'

import './photos5.css'

const PHOTOS5 = (props) => {
  return (
    <div className="photos5-photos5">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="photos5-image"
      />
      <h2 className="photos5-text">{props.heading}</h2>
    </div>
  )
}

PHOTOS5.defaultProps = {
  image_src:
    'https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-2c125818--RwandaCooperative-members-4.JPG?v=1582225011',
  image_alt: 'image',
  heading: 'GURGAON',
}

PHOTOS5.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default PHOTOS5
