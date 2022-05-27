import {Alert,Button} from 'react-bootstrap'
import { useState } from 'react';
import './alert.css'
export default function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" style={{padding:'0',maxWidth: '150px'}}onClose={() => setShow(false)} dismissible>
          <p>You've got an error</p>
          
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  
 