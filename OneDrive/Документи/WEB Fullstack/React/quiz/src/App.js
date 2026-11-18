import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './componentsFooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>main</main>
        <Footer/>
      </div>
    )
  }
}