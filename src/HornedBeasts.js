import React, { Component } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Mymodul from './Mymodul';
class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }

    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    //   }

    voteToraise = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        })
    }


    // const [show, setShow] = useState(false);

    // return (
    //   <div className="App">
    //     <button onClick={() => setShow(true)}>Show Modal</button>
    //     <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
    //       <p>This is modal body</p>
    //     </Modal>
    //   </div>
    // );
    render() {

        return (
            <div>
                {/* <h2>
                    
                </h2>
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}

                
                
                            <Image src={this.props.image_url} roundedCircle  width='200' height='200'/>
               
              
                

            <p>{this.props.description}</p>  */}

                <Col>

                    <Card style={{ width: '18rem' }} bg='light'>

                        <a onClick={this.voteToraise}>
                            <Card.Img variant="top" src={this.props.image_url} width='200' height='200' />
                        </a>

                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                                <br />
                                <span>
                                    <i class="fab fa-gratipay">{this.state.numOfVotes}</i>
                                </span>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                            {/* <button> Slecte this Beast </button> */}

                            <Mymodul/>
                            


                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default HornedBeasts
