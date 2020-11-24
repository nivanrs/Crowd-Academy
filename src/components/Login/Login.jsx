import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { login, UserAccount } from "../../actions/userActions";

const MySwal = withReactContent(Swal);

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { status, error, token, account } = userLogin;

  useEffect(() => {
    async function getLogin() {
      if (token) {
        MySwal.fire({
          title: "Sukses",
          icon: "success",
          text: "Login Berhasil",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/");
          }
        });
      }
    }
    getLogin();
  }, [history, token, account]);

  useEffect(() => {
    if (status && status === "unverified" ) {
      MySwal.fire({
        title: "Gagal",
        icon: "error",
        text: "Login Gagal. Silahkan Verifikasi Akun Terlebih Dahulu",
      }).then((result) => {
        if (result.isConfirmed) {
          setEmail("");
          setPassword("");
        }
      });
    }
  }, [status]);

  useEffect(() => {
    if (error && error !== undefined) {
      MySwal.fire({
        icon: "error",
        title: error,
      }).then((result) => {
        if (result.isConfirmed) {
          setEmail("");
          setPassword("");
        }
      });
    }
  }, [error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    dispatch(UserAccount(email));
  };

  return (
    <Container style={{display: 'flex', justifyContent: 'center'}}>
      <Card className="my-4" border="info" style={{ width: '30rem' }}>
        <Card.Header className="text-center" style={{background: "#3498DB", color: "#FFFFFF"}}>Masuk</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler} className="form">
            <Form.Group controlId="email" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group controlId="password" className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="footer">
              <Button type="submit" variant="primary" className="btn">
                Login
              </Button>
            </div>
          </Form>
          <p className="mt-2 mb-0">Belum Memiliki akun? <a href='/register'>Daftar</a></p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
