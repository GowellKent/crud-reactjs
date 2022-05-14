import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponents from './components/NavbarComponents'

export default class App extends Component {
  state = {
    title: "Cekidiw Academy"
  }
  render() {
    return (
      <div>
        <NavbarComponents />
        <JumbotronComponent title={this.state.title}  />
      </div>
    )
  }
}
