import React, { Component } from 'react'
import {Button, Form} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

export default class AddComment extends Component {
     state={
       isLoading:false,
         comment :{
        "comment": '',
        "rate": '1',
      },}

      setLoading = (boolean) => {
        this.setState({
          isLoading: boolean
        })
      }
    postComments = async ()=> {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTM2NTQ3NjEsImV4cCI6MTY1NDg2NDM2MX0.XR-ftJg2hOvYlANycIWxBoCVYP0vFqdQTqEpjT8-GJc",
                'Content-type': 'application/json',
                  
            },
            body: JSON.stringify({...this.state.comment,elementId:this.props.asin}) 
            
        });
        if(response.ok) {
          this.setState({
            isLoading:true
          })
        }
        return response.json();
    }

    
  render() {
    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Comment text</Form.Label>
          <Form.Control onChange={(e)=>{
              this.setState({
                comment: {
                    ...this.state.comment,
                    comment: e.target.value
                }
              })
          }} type="text" placeholder='Enter some text' />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control onChange={(e)=>{
              this.setState({
                  comment: {
                      ...this.state.comment,
                      rate: e.target.value
                  }
              })
          }}
          as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={()=>{
          this.postComments()
        }} 
        type='button'className='btn brn-success'>Comment</Button>
      </Form>
    )
  }
}
