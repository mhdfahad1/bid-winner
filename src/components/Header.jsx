import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image 9.png'
import elipse from '../Ellipse 1.png'


function Header() {
  return (
    <div className='bg-blue-950'>
      <Navbar expand="lg" className='text-white'>
        <Container>
          <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
          <button className='border -ml-4 font-bold'>BID WINNER</button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-20 flex">
              <div className='flex'>
                <Nav.Link className=' text-white '>Dashboard</Nav.Link>
                <Nav.Link className=' text-white ml-3'>Jobs</Nav.Link>
                <Nav.Link className=' text-white ml-3'>Calendar</Nav.Link>
                <Nav.Link className=' text-white ml-3'>Cost Catalog</Nav.Link>
                <Nav.Link className=' text-white ml-3'>Database</Nav.Link>
                <Nav.Link className=' text-white ml-3'>Tutorials</Nav.Link>
              </div>
              <div className='flex justify-end'>
                {/* <select name="" id="">
                <option value=""selected hidden><div className='flex border'>
                  <div className='text-sm'>
                    <b>Jane Cooper</b><br />
                    janecooper@gmail.com
                  </div>
                  <div>
                    <img src={elipse} alt="" />
                  </div>
                </div></option>
                </select> */}
              </div>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header