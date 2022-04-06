import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
const pic = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"


function Home() {
    return (
        <div className="home-body mt-5">
            <Container>

                <Row className="home-main-row">
                    <Col>
                        <Card className="p-5">
                            <Card.Body>
                                <Image src={pic} height={300} roundedCircle />
                                <Card.Title>
                                    <h1>Hasanbasori Samang</h1>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">
                                    <h2>Full-stack Developer</h2>
                                </Card.Subtitle>
                                <Card.Text>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ullam quis assumenda. Alias, perferendis optio. Voluptas minus illum doloribus nemo sequi voluptatum, adipisci unde fuga autem sint assumenda. Dignissimos magni natus, nihil dicta, id vel deserunt deleniti voluptatem aspernatur iure tempora, officia ducimus delectus quisquam? Ad nihil consectetur autem sequi.</p>
                                </Card.Text>
                                <Card.Link> 
                                    <Button variant='primary'>About</Button>
                                </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home