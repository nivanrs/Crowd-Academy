import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, CardDeck, Jumbotron, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { GetCourseDetail, EnrollCourse } from "../../actions/menuActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DetailKursus = () => {
  let history = useHistory();
  let { idcourse } = useParams();

  const dispatch = useDispatch();

  const menuCourseDetail = useSelector((state) => state.menuCourseDetail);
  const enrollCourse = useSelector((state) => state.enrollCourse);
  const { detailcourses } = menuCourseDetail;
  const { status } = enrollCourse;

  useEffect(() => {
    dispatch(GetCourseDetail(idcourse));
  }, [dispatch, idcourse])

  useEffect(() => {
    async function getEnroll() {
      if (status === "success") {
        MySwal.fire({
          title: "Sukses",
          icon: "success",
          text: "Enroll Berhasil",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/course");
          }
        });
      }
    }
    getEnroll();
  }, [history, status]);

  const enrollHandler = (id) => {
    MySwal.fire({
      icon: "question",
      title: 'Yakin Mengikuti Kursus?',
      showCancelButton: true,
      confirmButtonText: `Ikuti`,
      cancelButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(EnrollCourse(id));
      }
    })
  }

  return (
    <div>
    <Jumbotron style={{display: 'flex', justifyContent: 'center'}} className="mx-4 my-4 px-4 py-4">
      <CardDeck>
        {detailcourses.length > 0 ? (
          detailcourses.map((product) => (
            <React.Fragment>
              <Card key={product._id}>
                <Card.Body>
                  <Card.Title>{product.NamaKursus}</Card.Title>
                  {product.topic.map((course) => (
                    <Card.Text>{course.NamaTopik}</Card.Text>
                  ))}
                  <Card.Text>{product.FiturKursus}</Card.Text>
                  <Card.Text>{product.DeskripsiKursus}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" type="submit" onClick={() => enrollHandler(product._id)}>
                    <FontAwesomeIcon icon={faClipboardCheck} /> Ikuti
                  </Button>
                </Card.Footer>
              </Card>
            </React.Fragment>
          ))
        ) : (
          <Alert variant="primary">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Data Kursus Tidak Tersedia!
          </Alert>
        )}
      </CardDeck>
    </Jumbotron>
    </div>
  );
}

export default DetailKursus;