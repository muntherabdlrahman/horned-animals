import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import horendData from './data.json'
import HornedForm from './HornedForm'
import SelectedBeast from './SelectedBeast'




class App extends Component {

  constructor() {
    super();
    this.state = {
      hornsData: horendData,
      show: false,
      modaldata:{},
    }

  }
  
  
  handleshow = (data) => {
    this.setState({
      show:true,
      modaldata:data,


    })

  }
  
  
  
  handleclose = () => {
    this.setState({
      show: false,
    });
  }
  
  
  render() {
    return (
      <div style={{ backgroundImage: `url("https://1stwebdesigner.com/wp-content/uploads/2017/08/dealfuel-2.gif")` }}>
        <Header />
        <HornedForm/>
        <Main selectedmodal={this.handleshow} data={this.state.hornsData}/>
        <SelectedBeast


          handleExit={this.handleclose }
          showdata={this.state.show}
          modaldata={this.state.modaldata}
        />
        <Footer />




      </div>
    )
  }

}

export default App
