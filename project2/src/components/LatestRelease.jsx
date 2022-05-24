import {Component} from 'react'
import romantic from '../data/romance.json'
import {ListGroup} from 'react-bootstrap'
import random_bg_color from './randomBgColor'




class Books extends Component {
    render(){
   
        return (
          <ListGroup >
            <h2 className="text-center">Books</h2>
            {romantic.map((book)=>(
              
  <ListGroup.Item style={{backgroundColor:random_bg_color()}}key={book.asin}> {book.title}
  </ListGroup.Item>
  ))}
  
  
</ListGroup>
        
    )}
}

export default Books  