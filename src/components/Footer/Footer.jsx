import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Col, Container } from 'react-bootstrap'

import React from 'react'

export default function Footer(props) {
  return (
    <Footer>
      <Navbar style={navbar}>
        <Navbar.Brand href='#home' style={{ color: '#1A73A3' }}>
          <Container>
            <Col>Copyright &copy; DTS-2020-FEBE UGM 04</Col>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Navbar>
    </Footer>
  )
}
const navbar = { backgroundColor: '#80C9F0' }
