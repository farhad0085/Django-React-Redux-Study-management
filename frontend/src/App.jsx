import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import { Container } from "react-bootstrap";
import Routes from "./routes";



function App() {
    return (
        <Container>
            <Navigation />
            <Routes />
        </Container>
    );
}

export default App;
