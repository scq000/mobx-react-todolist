import React from 'react';
import ReactDOM from 'react-dom';
import TodoStore from './TodoStore';
import TodoList from './TodoList';
import '../css/main.css';

ReactDOM.render(<TodoList store={TodoStore} />, app);
