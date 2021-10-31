
import React, { useState } from 'react';

const Diva = () => {
  const [show, setShow] = useState(false);

  const changeState = () => {
    setShow(!show)
  }

  return (
    <>
    <div className="div1" onClick={changeState}><p>to see styling in functional component</p></div>
    {
      show == false? null : (
        <div className="box1"><h3>This is created using functional component</h3>
              <p className="para1">This is done using external css</p>
              <p style={{color:"blue"}}>This is done using inline css</p>
        </div>
      )
    }
  </>
  )
};

export default Diva;