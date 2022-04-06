import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
const pic = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
const js = "https://img.icons8.com/color/48/000000/javascript--v1.png"
const reactjs = "https://img.icons8.com/plasticine/48/000000/react.png"
const nodeJs = "https://img.icons8.com/fluency/48/000000/node-js.png"
const phython = "https://img.icons8.com/fluency/48/000000/python.png"
function About() {
    let navigate = useNavigate()

    function handleBack() {
        return navigate(-1)
    }
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


                                <Card.Text>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos neque at eaque cupiditate dolorem nesciunt excepturi quisquam atque suscipit unde repellat perferendis consequatur itaque provident laboriosam quibusdam modi, assumenda consequuntur, cumque, deserunt dolores! Corporis doloribus iste magni a quibusdam sed iure non fugiat aut voluptatem, tempora eligendi quisquam eius voluptatibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ullam quis assumenda. Alias, perferendis optio. Voluptas minus illum doloribus nemo sequi voluptatum, adipisci unde fuga autem sint assumenda. Dignissimos magni natus, nihil dicta, id vel deserunt deleniti voluptatem aspernatur iure tempora, officia ducimus delectus quisquam? Ad nihil consectetur autem sequi.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque laboriosam distinctio esse doloremque non natus omnis eveniet voluptate reiciendis nisi est quidem amet numquam, deleniti impedit tenetur excepturi tempore rem aliquam cum tempora provident! Facere placeat, consectetur, unde repellat nulla totam vero quia veniam magnam quo error aperiam, eaque quibusdam.</p>
                                    <h3>My Skills</h3>
                                    <ul className="myskills">
                                        <li>
                                            <Image src={js}></Image>
                                            <Image src={reactjs}></Image>
                                            <Image src={phython}></Image>
                                            <Image src={nodeJs}></Image>
                                        </li>
                                    </ul>
                                    <div className='back-next-button'>
                                        <Button onClick={handleBack} variant="dark" >Back</Button>
                                    </div>
                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About