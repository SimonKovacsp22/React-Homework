import {Component} from 'react'
import  {Jumbotron,Button} from 'react-bootstrap'

class Welcome extends Component {
    render() {
      const JumboCompStyle = {
        marginLeft:'200px',
        
      }
        return(
        <Jumbotron className="pb-1">
  <div style={JumboCompStyle}>
    <h1>Welcome!</h1>
    <h3>
      Let's eat!
    </h3>
    <p>
      <Button variant="dark" className="mt-3">Learn more</Button>
    </p>
  </div>
      </Jumbotron>
        )
    }
}

export default Welcome