import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import bannerImg from '../../assets/girl.png'

export default class Banner extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col className='text-center'>
              <h1>Mari Belajar</h1>
              <h2>Dunia Perbankan yang seru menunggu anda</h2>
              <br></br>
              <Button variant='primary' href='/register' type='submit'>
                Daftar
              </Button>
            </Col>
            <Col className='text-center'>
              <img
                src={bannerImg}
                alt='study'
                height='250'
                width='250'
                className='rounded-circle'
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}
