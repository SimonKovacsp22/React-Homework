import {Component} from 'react'
import {Card,Button} from 'react-bootstrap'



class SingleBook extends Component {
 
 
   
  render() {
    const bookStyle = {
        marginLeft: '10px',
        marginBottom:'6px',
        width: '18rem',
        
      }
      const {selection, book} = this.props
      
    return (
      
      <Card  style={bookStyle}variant="top"
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
}


export default SingleBook