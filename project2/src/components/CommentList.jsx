


 const CommentList = function ({comments,setLoading}) {


  

    const deleteComment = async (url)=> {
      try{
         await fetch(url, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMDM4ZTZkMDZiOTAwMTUyZWYyYTEiLCJpYXQiOjE2NTM2NTQ3NjEsImV4cCI6MTY1NDg2NDM2MX0.XR-ftJg2hOvYlANycIWxBoCVYP0vFqdQTqEpjT8-GJc",
                'Content-type': 'application/json'
            }
        });
        setLoading(true)
    }
    catch(error){
        console.log(error)
}
    }
    
  
  
        return (
            comments.map((comment)=>(
            <div key={comment._id} className='d-flex justify-content-between px-3 align-items-center'>
                <p >{comment.comment}  rating:{comment.rate}</p>
                <button onClick={()=>{
                       deleteComment(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`)
                       
                       
                }
}
className='btn btn-dark' >DELETE</button>
            </div>
        ))
        
        )
    }

    export default CommentList