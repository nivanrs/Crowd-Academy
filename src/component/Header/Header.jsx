import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import React from "react";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import icon from "../../assets/icon.png";

export default function Header(props) {
  return (
    <header>
      <Navbar sticky="top" style={navbar} expand="lg">
        <Navbar.Brand href="/" style={{ color: "#1A73A3" }}>
          <Image
            alt=""
            src={icon}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Bank Crowd Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: "#1A73A3" }}>
              Beranda
            </Nav.Link>
            <Nav.Link href="/srticle" style={{ color: "#1A73A3" }}>
              Artikel
            </Nav.Link>
            <NavDropdown
              title="Tren"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="#action/3.1">
                Kursus Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kelas Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Pengajar Paling Top
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Kategori"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="#action/3.1">Ekonomi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Investasi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keuangan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Kewirausahaan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Menejemen</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Kursus"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="/course">
                Investasi
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Kelas"
              id="basic-nav-dropdown"
              style={{ color: "#1A73A3" }}
            >
              <NavDropdown.Item href="/class">
                Investasi pemula
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form inline>
            <FormControl className="mr-sm-2" type="text" placeholder="Search" />
            <Button variant="light" className="mr-sm-2">
              Search
            </Button>
          </Form>
          <Nav.Link href='/login' style={{ color: "#1A73A3" }} className="mr-sm-2">
            Masuk
          </Nav.Link>
          <Nav.Link href='/register' style={{ color: "#1A73A3" }} className="mr-sm-2">
            Daftar
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
const navbar = { backgroundColor: "#80C9F0" };
