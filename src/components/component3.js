import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className={`component3-container ${props.rootClassName} `}>
      <div className="component3-container1">
        <h1 className="component3-text">
          <br className=""></br>
          <br className=""></br>
          <br className=""></br>
          <span className="">GURGAON</span>
          <br className=""></br>
        </h1>
      </div>
    </div>
  )
}

Component3.defaultProps = {
  rootClassName: '',
}

Component3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component3
