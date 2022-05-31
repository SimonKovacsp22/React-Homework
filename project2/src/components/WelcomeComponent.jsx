import  {Jumbotron,Button} from 'react-bootstrap'

 const Welcome = () => {
    
      const JumboCompStyle = {
        marginLeft:'200px',
      }
      
        return(
        <Jumbotron className="pb-1">
  <div style={JumboCompStyle}>
    <h1>Welcome!</h1>
    <h3>
      Find your book by title.
    </h3>
    <p>
      <Button variant="dark" className="mt-3">Learn more</Button>
    </p>
  </div>
      </Jumbotron>
        )
    
}

export default Welcome