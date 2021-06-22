import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import { Row } from 'react-bootstrap'
import horendData from './data.json'

class Main extends Component {


  

  render() {

    
    // let newArrayforrender=[]
    // for(const[index,value]of hornedArrar.entries()){
    //     newArrayforrender.push(<HornedBeasts  image_url={value.image_url} title={value.title} description={value.description}/>)



    //     {newArrayforrender}
    // }
    return (
      <div>
        <Row>
          {
            horendData.map((horend, index) => {
              return < HornedBeasts key={index} image_url={horend.image_url} title={horend.title}
                description={horend.description} />
            })
          }
         
        </Row>
      </div>
    )
  }
}

export default Main
