import React, { Component } from 'react';
import { card } from 'react-bootstrap'
import { Images } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }

    voteToraise = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        })
    }
    render() {

        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>
                {/* <a onClick={this.voteToraise}>
                <Container>
                    <Row>

                        <Col xs={6} md={4}>
                            <Image src={this.props.image_url} roundedCircle />
                        </Col>

                    </Row>
                </Container>
                </a> */}




                <a onClick={this.voteToraise}> <img src={this.props.image_url} width='200px' height='200px'  /></a>
                <span>
                    <i class="fab fa-gratipay">{this.state.numOfVotes}</i>
                </span>
                <p>{this.props.description}</p>



{/* 
                 <div>
                    <Container>
                        <Row>

                            <Col xs={6} md={4}>
                                <Image src={this.props.image_url} roundedCircle />
                            </Col>

                        </Row>
                    </Container>
               </div> */}
                {/* <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div> */}
            </div>
        )
    }
}

export default HornedBeasts
