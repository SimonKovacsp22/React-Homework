import {useState, useEffect} from 'react'
import CommentList from './CommentList'
import {Spinner,Button} from 'react-bootstrap'
import AlertDismissibleExample from './Alert';
import AddComment from './AddComment';



const CommentArea = function({asin})  {

    const [comments, setComments] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[isError, setIsError] = useState(false)
    const[addCommentVisible, setAddCommentVisible] = useState(false)
    const [addCommentBtnVisible, setAddCommentBtnVisible] = useState(true)

  
   useEffect(()=>{
       if(asin && isLoading){
       fetchComments()}}
   ,[asin,isLoading])
           
        
    
    const fetchComments = async ()=> {
        try{
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTM2NTQ3NjEsImV4cCI6MTY1NDg2NDM2MX0.XR-ftJg2hOvYlANycIWxBoCVYP0vFqdQTqEpjT8-GJc"
                }
                })
                if(response.ok) {
                    let data = await response.json()
                    console.log(data)
                    
                  setComments(data)
                  setIsLoading(false)
                }
                else {
                    console.log('error')
                }
    }
    catch(error){
        
            setIsError(true)
            setIsLoading(false)
            console.log(error)
    }
    }
   
    
        return (
        <div>
            <div className='d-flex justify-content-center'>
            {(isLoading && asin!==undefined) &&
            (<Spinner animation="border" />)}
            {isError && (<AlertDismissibleExample/>)}
            </div>
            <CommentList comments={comments} setLoading={setIsLoading}/>
            <div className='d-flex justify-content-center'>
               <div className=''>
                    {addCommentBtnVisible && <Button onClick={()=>{
                        setAddCommentVisible(true)
                        setAddCommentBtnVisible(false)
                    }} 
                    className='btn btn-light'>Add Comment</Button>}
                    
                    {addCommentVisible && <AddComment  setLoading={setIsLoading} asin={asin}/>}
               </div>
                </div>
        </div>
        )
    }

export default CommentArea