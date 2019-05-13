import React, { useState } from 'react';
import './App.css';
import ToDoList from './todoList';

function App() {
  const [todo, setToDo] = useState('');
  const [todoList, setToDoList] = useState([]);
  const [, setToDoLength] = useState(todoList.length);

  const addTodo = () => {
    const list = todoList;
    const item = { value: todo, id: todoList.length + 1 };
    if (todo) {
      list.push(item);
      setToDoList(list);
      setToDo('');
      setToDoLength(list.length);
    } else {
      alert('Write something into input');
    }
  };

  const deleteTodo = (index) => {
    const list = todoList;
    list.splice(index, 1);
    setToDoLength(list.length);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="todo_input"> New Todo:
          <input id="todo_input" type="text" value={todo} onChange={e => setToDo(e.target.value)} />
        </label>
        <button type="button" onClick={() => addTodo()}>Add Todo</button>
      </form>
      <ToDoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
