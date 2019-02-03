import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//FIXME: Arrumar o link aqui
export default class AddButton extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Link to={this.props.link}>
          Add contact
      </Link>
      </div>
    )
  }
}
{/* <div className={this.props.className}>
  <button onClick={() => this.props.history.push(this.props.link)}>
    {this.props.text}
  </button>
</div> */}