import { useState, useEffect } from 'react'
import {Button, Form} from 'react-bootstrap'

const AddComment = function ({asin}) {

   const [isLoading,setIsLoading] = useState(true)
   const [comment, setComment] = useState({'comment':'','rate':'1'})
 
     
    const postComments = async ()=> {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTM2NTQ3NjEsImV4cCI6MTY1NDg2NDM2MX0.XR-ftJg2hOvYlANycIWxBoCVYP0vFqdQTqEpjT8-GJc",
                'Content-type': 'application/json',
                  
            },
            body: JSON.stringify({...comment,elementId:asin}) 
            
        });
        if(response.ok) {
          setIsLoading(false)
        return response.json();
    }
  }
    
 
    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Comment text</Form.Label>
          <Form.Control onChange={(e)=>{
             setComment({  ...comment,
              comment: e.target.value})
                }
              }
           type="text" placeholder='Enter some text' />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating</Form.Label>
          <Form.Control onChange={(e)=>{
             setComment({  ...comment,
              rate: e.target.value})
                }
              }
          as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button onClick={()=>{
          postComments()
        }} 
        type='button'className='btn brn-success'>Comment</Button>
      </Form>
    )
  
}


export default AddComment