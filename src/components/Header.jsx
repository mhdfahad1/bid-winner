import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
              <div className='flex justify-end ml-16'>
                <Nav.Link className=' text-white -mt-3'>
                  <div className='flex w-[230px] h-[50px] bg-blue-950 border pl-1 pt-1'>
                    <div>
                      <h1 className='text-sm font-semibold text-right'>Jane Cooper</h1><br />
                      <p className='text-sm -mt-5 text-right'>janecooper@gmail.com</p>
                    </div>
                    <div>
                      <img src={elipse} alt="" />
                    </div>

                  </div>
                </Nav.Link>

                <Nav.Link className=' text-white ml-3'><i class="fa-regular fa-bell"></i></Nav.Link>

              </div>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header