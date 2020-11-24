import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardDeck, Jumbotron } from "react-bootstrap";
import { GetEnrollCourse } from "../../actions/courseActions";
import { logout } from "../../actions/userActions";

const KursusSaya = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  const userCourseData = useSelector((state) => state.userCourseData);
  const { enrolls } = userCourseData;

  useEffect(() => {
    if (token) {
      dispatch(GetEnrollCourse());
    } else {
      dispatch(logout());
      history.push("/login")
    }
  }, [dispatch, history, token])

  return (
    <div>
      <Jumbotron className="mx-4 my-4 px-4 py-4">
        <CardDeck>
          {enrolls.map((product) => (
            <React.Fragment>
              <Card key={product._id}>
                  {product.enrollment.map((course) => (
                    <Card.Body>
                      <Card.Title>{course.NamaKursus}</Card.Title>
                      <Card.Text>{course.PencapaianKursus}</Card.Text>
                      <Card.Text>{course.FiturKursus}</Card.Text>
                    </Card.Body>
                  ))}
                <Card.Footer>{product.HargaKursus}</Card.Footer>
              </Card>
            </React.Fragment>
          ))}
        </CardDeck>
      </Jumbotron>
    </div>
  );
}

export default KursusSaya;