import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Navbar.Brand as={NavLink} to="/" exact>Study Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="ml-auto my-2">
                    <FormControl type="search" placeholder="Search" />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
                    <NavDropdown title="Semesters" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to="/semesters/1-1">First year, First Semester (1/1)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/1-2">First year, Second Semester (1/2)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/2-1">Second year, First Semester (2/1)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/2-2">Second year, Second Semester (2/2)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/3-1">Third year, First Semester (3/1)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/3-2">Third year, Second Semester (3/2)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/4-1">Forth year, First Semester (4/1)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters/4-2">Forth year, Second Semester (4/2)</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/semesters" exact>Browse all</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}


export default Navigation