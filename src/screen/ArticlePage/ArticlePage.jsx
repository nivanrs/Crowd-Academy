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
  return (
    <div>
      <p>Waktu:</p>
    </div>
  )
}
function IsiArtikel() {
  return (
    <div>
      <h5>Silabus:</h5>
      <p> - Fundamental investasi</p>
    </div>
  )
}
function Like() {
  return <p>jumlah like:</p>
}

function Comment() {
  return <p>Komentar</p>
}
