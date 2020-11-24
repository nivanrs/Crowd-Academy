import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function ArticlePage(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Judul />
          <Penulis />
          <WaktuRilis />
          <IsiArtikel />
          <Like />
          <Comment />
        </Col>
      </Row>
    </Container>
  )
}

function Judul() {
  return <h2>Kursus Investasi untuk Pemula</h2>
}

function Penulis() {
  return <p>Penulis</p>
}

function WaktuRilis() {
  return <p>Waktu:</p>
}
function IsiArtikel() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cupiditate!
        Voluptates enim sapiente quisquam ab voluptate officiis mollitia
        asperiores unde doloribus eos tempora deleniti eum, optio reprehenderit
        eligendi quia dolores!
      </p>
    </div>
  )
}
function Like() {
  return <p>jumlah like:</p>
}

function Comment() {
  return <p>Komentar</p>
}
