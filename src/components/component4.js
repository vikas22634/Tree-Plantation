import React from 'react'

import PropTypes from 'prop-types'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className={`component4-container ${props.rootClassName} `}>
      <div className="component4-container1">
        <h1 className="component4-heading">
          <br className=""></br>
          <br className=""></br>
          <br className=""></br>
          <span className="">NOIDA</span>
        </h1>
      </div>
    </div>
  )
}

Component4.defaultProps = {
  rootClassName: '',
}

Component4.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component4
