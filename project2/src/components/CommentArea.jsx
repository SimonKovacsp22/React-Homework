import React from 'react'
import CommentList from './CommentList'
import {Spinner} from 'react-bootstrap'
import AlertDismissibleExample from './Alert';



export default class CommentArea extends React.Component {
    state = {
        comments:[],
        isLoading: true,
        isError: false,
    }
    componentDidMount= () => {
        
        this.fetchComments()
    }
    fetchComments = async ()=> {
        try{
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTM2NTQ3NjEsImV4cCI6MTY1NDg2NDM2MX0.XR-ftJg2hOvYlANycIWxBoCVYP0vFqdQTqEpjT8-GJc"
                }
                })
                if(response.ok) {
                    let data = await response.json()
                    
                    this.setState({
                        comments: data,
                        isLoading: false,
                    })
                }
                else {
                    console.log('error')
                }
    }
    catch(error){
        this.setState({
            isError: true,
            isLoading: false,
        })
        console.log(error)
    }
    }
   
    render() {
        return (
        <div>
            <div className='d-flex justify-content-center'>
            {this.state.isLoading &&
            (<Spinner animation="border" />)}
            {this.state.isError && (<AlertDismissibleExample/>)}
            </div>
            <CommentList comments={this.state.comments} />
        </div>
        )
    }

}