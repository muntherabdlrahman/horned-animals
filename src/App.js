import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.scss';


 class App extends Component {
//    constructor(props){
//      super(props);
//      this.state={
//        dataForBeast:indevedvual
//      }
//    }
  render() {
    return (
      <div style={{background:'#C5D7BD'}}>
         <Header/>
         <Main/>
         <Footer/>
      </div>
    )
  }
}

export default App
