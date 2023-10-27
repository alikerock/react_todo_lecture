import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


const Todo = ({data})=>{
  const[ischecked, setIschecked] = useState(false);

  let className = 'form-check-label';
  let deco = {};
  if(ischecked){
    className += ' text-muted';
    deco = {textDecoration:'line-through'}
  }

  const handleCheckboxClick = (e)=>{        
    setIschecked(!ischecked);
    console.log(ischecked);
  }

  return(
    <div className="form-check">
      <input className="form-check-input " type="checkbox" value="" id={`todo${data.id}`} onChange={handleCheckboxClick} />
      <label className={className} style={deco} htmlFor={`todo${data.id}`}>
        {data.text}
      </label>
    </div>
  )
}

export default Todo;