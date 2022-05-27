import React from "react";
import { Container, Row,Form,FormControl} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  render() {
    
    return (
      <Container>
       <Form.Group className="d-flex justify-content-center mb-4 flex-column align-items-center">
          <Form.Label>Search by title</Form.Label>
   <Form inline >
        <FormControl  type="text" placeholder="Search" className="mr-sm-2 " />
        
      </Form>
       </Form.Group>
        <Row className="d-flex justify-content-center">
          
              {this.props.books.map((book)=>(
                  <SingleBook key={book.asin} title={book}/>
              ))}
          
        </Row>
      </Container>
    )
  }
}

export default BookList