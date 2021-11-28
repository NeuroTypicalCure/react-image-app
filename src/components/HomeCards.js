import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import logo from '../logo.svg';

const HomeCards = (props) => {
    return(
        <Container style={{minHeight:"100%"}} >
        <Row>
            <Col md={1}></Col>
            <Col md={9}>
                <h1 style={{letterSpacing: 45,textAlign: "center", color:"white", marginBottom:50}}>MANIPULATE</h1>
            </Col>
            <Col md={1}></Col>
        </Row>
        <Row>
            <Col md={1}></Col>

            <Col md={3}>
                <Card style={{display:"inline-block"}}>
                    <Card.Img variant="top" src={logo} height="200" />
                    <Card.Body>
                        <Card.Title>Image Processing</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card style={{ display:"inline-block"}}>
                    <Card.Img variant="top" src={logo} height="200" />
                    <Card.Body>
                        <Card.Title>Sound Processing</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card style={{ display:"inline-block"}}>
                    <Card.Img variant="top" src={logo} height="200" />
                    <Card.Body>
                        <Card.Title>Information Board</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={1}></Col>
        </Row>
    </Container>
    )
}

export default HomeCards;