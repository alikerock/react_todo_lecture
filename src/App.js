import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Todo from './Todo';

function App() {

  const [todo,setTodo] = useState([
    {id:1, text:'learn web', checked:false},
    {id:2, text:'get a job', checked:false}
  ]);

  let todos = todo.map(item=>(
    <Todo data={item} key={item.id} />
  ));

  return (
    <div className="container">
      <h1>Todo list</h1>
      <Form>
        <Form.Group className="mb-3" controlId="todo1">
          <Form.Label>Todo Input</Form.Label>
          <Form.Control type="text" placeholder="할일을 입력하세요" />
        </Form.Group>     
      </Form>   
      <hr/>
      <div>
        {todos}
      </div>  
    </div>
  );
}

export default App;
