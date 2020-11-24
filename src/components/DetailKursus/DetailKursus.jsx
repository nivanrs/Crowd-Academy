import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, CardDeck, Jumbotron, Button } from "react-bootstrap";
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
    <Jumbotron className="mx-4 my-4 px-4 py-4">
        <CardDeck>
            <React.Fragment>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            {detailcourses.NamaKursus}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{detailcourses.IDTopik}</Card.Text>
                        <Card.Text>{detailcourses.FiturKursus}</Card.Text>
                        <Card.Text>{detailcourses.DeskripsiKursus}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="success" type="submit" onClick={() => enrollHandler(detailcourses._id)}>
                            Ikuti
                        </Button>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        </CardDeck>
    </Jumbotron>
    </div>
  );
}

export default DetailKursus;