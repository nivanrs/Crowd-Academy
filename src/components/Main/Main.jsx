import React from 'react'
//import axios from "axios";
import { Container } from 'react-bootstrap'
//import { Card } from "react-bootstrap";
//import { Form } from "react-bootstrap";
//import { Row, Col } from "react-bootstrap";
//import { Button } from "react-bootstrap";
import Banner from '../Jumbotron/Jumbotron'
import KursusPilihan from '../KursusPilihan/KursuPilihan'

export default class Main extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Banner />
        <Container>
          <KursusPilihan />
        </Container>
      </div>
    )
  }
}
