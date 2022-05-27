import { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'



class MyNav extends Component {
    render(){
        return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Library</Navbar.Brand>
    <Nav className="ml-auto mr-5">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
   </Navbar>
        
    )}
    
}

export default MyNav