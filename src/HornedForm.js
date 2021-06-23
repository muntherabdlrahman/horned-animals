import React, { Component } from 'react'
import { Form, Button, Row, Card } from 'react-bootstrap';
import horendData from './data.json'
import HornedBeasts from './HornedBeasts';

 class HornedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // iamgeOfHorns:'',
            // titleOfHorns='',
            // dicriptionOfHorns:'',
            hornesType: ' ',
            show: false
        }
    }
    // userNameHandler=(e)=>{
    //     this.setState({
    //         username:e.target.value
    //     })
    //     console.log(this.state.username)
    // }
    hornesTypeHandler = (e) => {
        this.setState({
            hornesType: e.target.value
            
            
        })
        console.log(e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <Form onSubmit={(e) => { this.submitHandler(e) }}>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="formBasicPassword"> */}
                    {/* </Form.Group> */}
                    <Form.Text style={{textAlign:'center',fontFamily:"sans-serif" ,fontSize:"30px"}}>
                        We have different type of hornes you  can chose the best type of hornes by select your type by number and submit
                    </Form.Text>
                        <Form.Group as="select" aria-label="Default select example" onChange={(e) => this.hornesTypeHandler(e)}>
                            <option>Select The Type Number of Hornes</option>
                            <option value='1'>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                            <option value='101'>All</option>
                            
                        </Form.Group>
                    <Button variant="danger" type="submit">Submit</Button>
                </Form>




                {this.state.show &&
 <Card bg='secondary'>
                <Row>
                    {
                          horendData
                          .filter(number => {
                              return number.horns == this.state.hornesType
                          })
                          .map((horend, index) => {
                            return < HornedBeasts key={index} image_url={horend.image_url} title={horend.title}
                                description={horend.description} horns={horend.horns} />
                        })

                    }



                </Row>
                </Card>
                
                }
                {
                    this.state.show ===false && 

                    <Row>
                        {
                              horendData
                             
                              .map((horend, index) => {
                                return < HornedBeasts key={index} image_url={horend.image_url} title={horend.title}
                                    description={horend.description} horns={horend.horns} />
                            })
    
                        }
    
    
    
                    </Row>
                    
                }  {
                    this.state.show === true &&
                    
                    <Card bg='info'>
                        <br/>
                        <br/>
                        <br/>
                        <h2 style={{textAlign:'center',fontFamily:"cursive" ,fontSize:"70px"}}>All type</h2>
                    <Row>
                        {
                            horendData
                            
                            .map((horend, index) => {
                                return < HornedBeasts key={index} image_url={horend.image_url} title={horend.title}
                                description={horend.description} horns={horend.horns} />
                            })
                            
                        }
    
    
    
                    </Row>
                    </Card>
                    
                }




                
                  


    
            </div>
                
        )


    }
}

export default HornedForm
