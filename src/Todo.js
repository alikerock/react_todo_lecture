import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


const Todo = ({data,deleteTodo})=>{
  const[mode, setMode] = useState('read');
  const[ischecked, setIschecked] = useState(false);
  const[text, setText] = useState(data.text);

  let className = 'form-check-label';
  let formClass = 'hidden';

  if(mode === 'edit'){
    className += ' hidden';
    formClass = '';
  }

  let deco = {};
  if(ischecked){
    className += ' text-muted';
    deco = {textDecoration:'line-through'}
  }

  const handleCheckboxClick = (e)=>{        
    setIschecked(!ischecked);
    console.log(ischecked);
  }
  const todoDelete = () =>{
    deleteTodo(data.id);
  }
  const todoEdit = () =>{
    setMode('edit');
  }  
  const handleEdit = (val) =>{
    setText(val) ;
    console.log(text);
  }  
  const changeMode = (val) =>{
     setMode(val);
  }  

  return(
    <div className="form-check">
      <input className="form-check-input " type="checkbox" value="" id={`todo${data.id}`} onChange={handleCheckboxClick} />
      <label className={className} style={deco} htmlFor={`todo${data.id}`}>
        {text}
      </label>
      <form className={formClass}>
        <input className="form-control" type={"text"} placeholder={text} onChange={(e)=>{
          handleEdit(e.target.value);
          //console.log(text);
        }} />
        <button type="button" className="btn btn-secondary btn-sm">Update</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={()=>{
          changeMode('read');
        }}>cancel</button>
      </form>
      <button type="button" className="btn btn-danger btn-sm" onClick={todoDelete}>Delete</button>
      <button type="button" className="btn btn-info btn-sm" onClick={todoEdit}>Edit</button>
    </div>
  )
}

export default Todo;