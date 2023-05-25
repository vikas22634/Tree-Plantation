import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      <div className="component2-container1">
        <h1 className="component2-heading">
          <br className=""></br>
          <br className=""></br>
          <br className=""></br>
          <span className="">FARIDABAD</span>
        </h1>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  rootClassName: '',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Component2
