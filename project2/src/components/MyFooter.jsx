




const  MyFooter =function () {
    
        const footerStyle = {
            position: 'fixed' ,
            bottom: '0' ,
            backgroundColor: '#e9ecef',
            width: '100%',
            height:'50px',


        }
      return (
          <div style={footerStyle} className="d-flex align-items-center">
            <a href="#" className="mx-5">
               Some Info
            </a>
            <a href="#" className="mx-5">
               Some Info
            </a>
            <a href="#" className="mx-5">
               Some Info
            </a>
          </div>
      )
        
       
    
}

export default MyFooter