import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/WelcomeComponent';
import BookList from './components/BookList';
import romance from './data/romance.json';
import {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import CommentArea from './components/CommentArea';


class App extends Component {
  state = {
    selected: undefined,
  };

   setSelection=(selection) => {
     this.setState({selected: selection})
   }
  render() {
  return (
    <>
    <MyNav>
    </MyNav>
    <Welcome>

    </Welcome>
    <Container fluid>
      <Row >
        <Col xs={8} md={8} className="align-items-baseline ">
        <BookList books={romance} selection={this.setSelection} />
        </Col>
        <Col xs={4}  md={4}>
        <CommentArea asin={this.state.selected}/>
        </Col>
      </Row>
      </Container>

    
    
 
    <MyFooter>

    </MyFooter>
    
    </>
  );
}
}

export default App;

