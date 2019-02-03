import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//TODO: Acho que pode ser componente funcional
export default class AddButton extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className={this.props.className}>
          <button>
            {this.props.text}
          </button>
        </div>
      </Link>
    )
  }
}