import {Component} from 'react'
import {Card,Button} from 'react-bootstrap'
import CommentArea from './CommentArea'


class SingleBook extends Component {
  state = {
    selected: false,
    isShowing: false,
  };
  render() {
    const bookStyle = {
        marginLeft: '10px',
        marginBottom:'6px',
        width: '18rem',
        
      }
    const {title,img,price,category,asin} = this.props.title;
    return (
      <div className='d-flex flex-column'>
      <Card  style={bookStyle}variant="top"
        onClick={() => {
          this.setState({
            selected: true,
            isShowing: true
          });
        }}
        
      >
        <Card.Img   src={img} style={{height: '25rem'}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Category: {category}</Card.Text>
          <Button variant="primary">{price} $</Button>
        </Card.Body>
      </Card>
      {this.state.isShowing && (<CommentArea asin={asin} />)}
      </div>
    );
  }
}


export default SingleBook