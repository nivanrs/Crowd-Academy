import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardDeck, Jumbotron, Button, ButtonGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
      <Jumbotron className="px-4 py-4">
        <CardDeck>
          {courses.map((product) => (
            <React.Fragment>
              <Card key={product._id}>
                <Card.Body>
                  <Card.Title>{product.NamaKursus}</Card.Title>
                  <Card.Text>{product.IDTopik}</Card.Text>
                  <Card.Text>{product.FiturKursus}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <ButtonGroup>
                    <LinkContainer to={`/coursedetail/${product._id}`}>
                      <Button variant="secondary" type="submit">
                        Detail
                      </Button>
                    </LinkContainer>
                    <Button variant="success" type="submit" onClick={() => enrollHandler(product._id)}>
                      Ikuti
                    </Button>
                  </ButtonGroup>
                </Card.Footer>
              </Card>
            </React.Fragment>
          ))}
        </CardDeck>
      </Jumbotron>
    </div>
  );
}

export default KursusPilihan;