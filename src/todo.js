/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropType from 'prop-types';
import React, { useState } from 'react';

function ToDo(props) {
  const { todo, deleteTodo, index } = props;
  const [done, setDone] = useState(false);
  return (
    <li
      style={{
        textDecoration: done ? 'line-through' : 'none',
        color: done ? 'red' : 'black',
        position: 'relative',
        padding: '10px',
        // listStyleType: 'none',
      }}
      onClick={() => setDone(!done)}
    >{todo.value}
      <span
        onClick={() => deleteTodo(index)}
        style={{
          padding: '20px',
          cursor: 'pointer',
          position: 'absolute',
          right: '0px',
          top: '0px',
        }}
      >{'\u00D7'}
      </span>
    </li>
  );
}

ToDo.propTypes = {
  todo: PropType.object.isRequired,
  deleteTodo: PropType.func.isRequired,
  index: PropType.number.isRequired,
};

export default ToDo;
