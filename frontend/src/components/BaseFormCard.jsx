import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const BaseFormCard = (props) => {

    return (
        <Row>
            <Col md={{ span: 6, offset: 3 }} sm={12}>
                <Card border="success">
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted text-center">{props.title}</Card.Title>
                        <hr />
                        <Card.Text as='div' className="mb-2">
                            {props.children}
                        </Card.Text>
                        {props.type === "login" && (
                            <>
                            <Card.Link as={Link} to="/forget-password">Forgot Password?</Card.Link>
                            <Card.Link className={"float-right"} as={Link} to="/register">Create an Account</Card.Link>
                            </>
                        )}
                        {props.type === "register" && (
                            <Card.Link as={Link} to="/login">Already have account? Login here</Card.Link>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default BaseFormCard