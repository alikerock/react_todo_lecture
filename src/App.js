import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Todo from './Todo';

function App() {

  const [todoid, setTodoid] = useState(2);

  const [todo,setTodo] = useState([
    {id:1, text:'learn web', checked:false},
    {id:2, text:'get a job', checked:false}
  ]);

  let todos = todo.map(item=>(
    <Todo data={item} key={item.id} />
  ));

  let addTodo = (value)=>{
    let newTodos = [...todo];
    let newId = todoid + 1;
    setTodoid(newId);
    newTodos.push({id:newId, text:value, checked:false});
    setTodo(newTodos);
    document.getElementById('todo').value='';
  }

  return (
    <div className="container">
      <h1>Todo list</h1>
      <Form onSubmit={e=>{
        e.preventDefault();
        // console.log(e.target.todo.value);
        addTodo(e.target.todo.value);
      }}>
        <Form.Group className="mb-3" controlId="todo">
          <Form.Label>Todo Input</Form.Label>
          <Form.Control type="text" name="todo" placeholder="할일을 입력하세요" />
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
