/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropType from 'prop-types';
import React from 'react';
import ToDo from './todo';

function ToDoList(props) {
  const { todoList, deleteTodo } = props;
  return (
    <ol style={{ margin: '0px' }}>
      {todoList.map((todo, i) => <ToDo key={todo.id} todo={todo} deleteTodo={deleteTodo} index={i} />)}
    </ol>
  );
}

ToDoList.propTypes = {
  todoList: PropType.array.isRequired,
  deleteTodo: PropType.func.isRequired,
};

export default ToDoList;
