import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'

export class Main extends Component {
  render() {
    return (
      <div>
            <HornedBeasts
              showmodal={this.props.handleshow}/>
              
      </div>
    )
  }
}

export default Main
