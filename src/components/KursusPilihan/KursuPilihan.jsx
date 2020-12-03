import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardDeck, Jumbotron, Button, ButtonGroup, Alert } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faInfoCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { GetCourse, EnrollCourse } from "../../actions/menuActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const KursusPilihan = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const menuCourseData = useSelector((state) => state.menuCourseData);
  const enrollCourse = useSelector((state) => state.enrollCourse);
  const { courses } = menuCourseData;
  const { status } = enrollCourse;

  useEffect(() => {
    dispatch(GetCourse());
  }, [dispatch])

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
      <Jumbotron style={{display: 'flex', justifyContent: 'center'}} className="px-4 pt-3 pb-0">
        <CardDeck className="mb-3">
          {courses.length > 0 ? (
            courses.map((product) => (
              <React.Fragment>
                <Card key={product._id}>
                  <Card.Body>
                    <Card.Title>{product.NamaKursus}</Card.Title>
                    {product.coursetopic.map((topic) => (
                      <Card.Text>{topic.NamaTopik}</Card.Text>
                    ))}
                    <Card.Text>{product.FiturKursus}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <ButtonGroup style={{display: 'flex', alignItems: 'center'}}>
                      <Button variant="success" type="submit" onClick={() => enrollHandler(product._id)}>
                        <FontAwesomeIcon icon={faClipboardCheck} /> Ikuti
                      </Button>
                      <LinkContainer to={`/coursedetail/${product._id}`}>
                        <Button variant="secondary" type="submit">
                          <FontAwesomeIcon icon={faInfoCircle} /> Detail
                        </Button>
                      </LinkContainer>
                    </ButtonGroup>
                  </Card.Footer>
                </Card>
              </React.Fragment>
            ))
          ) : (
            <Alert variant="primary">
              <FontAwesomeIcon icon={faExclamationTriangle} /> Tidak Ada Data Kursus!
            </Alert>
          )}
        </CardDeck>
      </Jumbotron>
    </div>
  );
}

export default KursusPilihan;