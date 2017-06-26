import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default class Product extends React.Component {

  render () {
    return (
        <div className="product">
          <h3>{this.props.name}</h3>
          <p>{this.props.producer}</p>
          <p>{this.props.hasWatermark}</p>
          <p>{this.props.color}</p>
          <p>{this.props.weight}</p>
        </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}


var weightRange = []
for (var i = 80; i <= 300; i++) {
  weightRange.push(i)
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired 
}
