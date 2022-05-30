import React from "react";
import { Container, Row} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  render() {
    
    return (
      <Container>
  
        <Row className="d-flex justify-content-center">
          
              {this.props.books.map((book)=>(
                  <SingleBook key={book.asin} book={book} selection={this.props.selection} />
              ))}
          
        </Row>
      </Container>
    )
  }
}

export default BookList