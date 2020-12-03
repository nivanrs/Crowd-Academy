import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { register } from "../../actions/userActions";
import { USER_REGISTER_STATUS_RESET } from "../../constants/userConstants";

const MySwal = withReactContent(Swal);

const Register = ({ history }) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const isVerified = false;

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { error, status } = userRegister;

    useEffect(() => {
        if (status === "success") {
            MySwal.fire({
                title: "Sukses",
                icon: "success",
                text: "Register Berhasil. Silahkan Lakukan Verifikasi Akun",
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch({ type: USER_REGISTER_STATUS_RESET });
                    history.push("/login");
                }
            });
        }
    }, [status, dispatch, history]);

    useEffect(() => {
        if (error !== undefined) {
            MySwal.fire({
                icon: "error",
                title: error,
            }).then((result) => {
                if (result.isConfirmed) {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setRole("");
                }
            });
        }
    }, [error]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(FirstName, LastName, email, password, role, isVerified));
    };

  return (
    <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Card className="my-4" border="info" style={{ width: '30rem' }}>
            <Card.Header className="text-center" style={{background: "#3498DB", color: "#FFFFFF"}}>Daftar</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler} className="form">
                    <Form.Group controlId="FirstName" className="form-group">
                        <Form.Label>Nama</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control
                                    value={FirstName}
                                    required
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    name="FirstName"
                                    placeholder="First Name"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value={LastName}
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    name="LastName"
                                    placeholder="Last Name"
                                />
                            </Col>
                        </Row>
                    </Form.Group>
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
                    <Form.Group>
                        <Form.Label>Pilih Jenis Akun</Form.Label>
                        <Form.Control as="select" name="role" value={null} required onChange={(e) => setRole(e.target.value)}>
                            <option selected disabled>Select Account</option>
                            <option value="1">Pengajar</option>
                            <option value="2">Pelajar</option>
                        </Form.Control>
                    </Form.Group>
                    <div className="footer">
                        <Button type="submit" variant="primary" className="btn">
                            Daftar
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  );
};

export default Register;
