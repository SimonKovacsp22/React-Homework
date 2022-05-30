import { Component } from 'react'
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'




class MyNav extends Component {
    render(){
        return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Library</Navbar.Brand>
    <Form.Group className="d-flex justify-content-center mb-0  align-items-center">
   <Form inline >
        <FormControl  type="text" placeholder="Search" className="mr-sm-2 ml-md-4 " />
        
      </Form>
       </Form.Group>
    <Nav className="ml-auto mr-5">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
   </Navbar>
        
    )}
    
}

export default MyNav