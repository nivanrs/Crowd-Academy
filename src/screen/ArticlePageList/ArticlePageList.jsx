import { CardDeck, Card, Container } from 'react-bootstrap'
import invest from '../../assets/course-invest.png'
import finance from '../../assets/course-personal-finance.jpg'
import report from '../../assets/course-financial-report.png'
import accounting from '../../assets/course-accounting.jpg'

export default function ArticlePageList(props) {
  return (
    <Container>
      <h1>Artikel</h1>
      <CardDeck>
        <Card>
          <Card.Img className='rounded mb-0' variant='top' src={invest} />
          <Card.Body>
            <Card.Title>Investasi untuk Pemula</Card.Title>
            <Card.Text>
              Kursus Investasi untuk pemula. Anda akan mendapatkan cuan banyak
              jika mengikuti kursus ini.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={finance} />
          <Card.Body>
            <Card.Title>Perencanaan Keuangan untuk Pemula</Card.Title>
            <Card.Text>
              Kursus perencanaan keuangan agar anda dapat mengatur keuangan
              dengan baik.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={report} />
          <Card.Body>
            <Card.Title>Paham Laporan Keuangan</Card.Title>
            <Card.Text>
              Memhami Laporan Keuangan Kuartalan untuk investasi jangka panjang.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src={accounting} />
          <Card.Body>
            <Card.Title>Belajar Akuntansi dengan Mudah</Card.Title>
            <Card.Text>
              Kursus akuntansi untuk persiapan sertifikasi akuntanssi.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  )
}
