import {Card,Button} from 'react-bootstrap'



const SingleBook = ({selection,book}) => {
 
    const bookStyle = {
        marginLeft: '10px',
        marginBottom:'6px',
        width: '18rem',
        
      }
      
    return (
      
      <Card  style={bookStyle} variant="top"
        onClick={() => {
        selection(book.asin)
         
      }
    }>
      
        <Card.Img   src={book.img} style={{height: '25rem'}}/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Category: {book.category}</Card.Text>
          <Button variant="primary">{book.price} $</Button>
        </Card.Body>
      </Card>
      
    );
  }



export default SingleBook