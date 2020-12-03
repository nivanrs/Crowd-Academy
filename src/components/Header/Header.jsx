import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Navbar,
  NavDropdown,
  Nav,
  Dropdown,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import icon from "../../assets/icon.png";
import { logout } from "../../actions/userActions";

const Header = () => {
  let history = useHistory()
  const dispatch = useDispatch()

  const account = localStorage.getItem('account')

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/login')
  }

  return (
    <header>
      <Navbar
        className='menu'
        sticky='top'
        expand='lg'
        style={{ background: '#80C9F0' }}
      >
        <Navbar.Brand href='/' style={{ color: '#000000' }}>
          <Image
            alt=''
            src={icon}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Bank Crowd Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/article-page-list' style={{ color: '#000000' }}>
              Artikel
            </Nav.Link>
            <NavDropdown title='Tren' style={{ color: '#FFFFFF' }}>
              <NavDropdown.Item href='#action/3.1'>
                Kursus Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Kelas Paling Top
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Pengajar Paling Top
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Kategori'
              id='basic-nav-dropdown'
              style={{ color: '#1A73A3' }}
            >
              <NavDropdown.Item href='#action/3.1'>Ekonomi</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Investasi</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Keuangan</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>
                Kewirausahaan
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>Menejemen</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Kursus'
              id='basic-nav-dropdown'
              style={{ color: '#1A73A3' }}
            >
              <NavDropdown.Item href="/course">
                Kursus Saya
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title='Kelas'
              id='basic-nav-dropdown'
              style={{ color: '#1A73A3' }}
            >
              <NavDropdown.Item href='/class'>
                Investasi pemula
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <Form.Control
              className='mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <Button variant='light' className='mr-sm-2'>
              Search
            </Button>
          </Form>

          {account ? (
            <Dropdown id='dropdown-basic'>
              <Navbar.Brand>
                <Dropdown.Toggle className='customDropdown'>
                  ({account})
                </Dropdown.Toggle>
              </Navbar.Brand>
              <Dropdown.Menu>
                <Dropdown.Item href='/course'>My Course</Dropdown.Item>
                <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Nav.Link
                href='/login'
                style={{ color: '#1A73A3' }}
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Masuk
              </Nav.Link>
              <Nav.Link
                href='/register'
                style={{ color: '#1A73A3' }}
              >
                <FontAwesomeIcon icon={faUserEdit} /> Daftar
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
