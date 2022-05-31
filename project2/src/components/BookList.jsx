
import { Container, Row} from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({books,selection})=> {
  
    
    return (
      <Container>
  
        <Row className="d-flex justify-content-center">
          
              {books.map((book)=>(
                  <SingleBook key={book.asin} book={book} selection={selection} />
              ))}
          
        </Row>
      </Container>
    )
  
}

export default BookList