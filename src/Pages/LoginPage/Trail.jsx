import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const Trial = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div className="outer">
        <Button onClick={() => setShowOffcanvas(true)}>Open Offcanvas</Button>
    <div className='inner'>
      
      <Offcanvas
        placement="end" // Adjust the placement as needed
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>This is the content of the Offcanvas.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
    </div>
  );
}

export default Trial;
