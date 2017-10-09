// TodoList 展示组件
import React from 'react'
import Todo from './Todo'

// props 解构 成todos, onTodoClick
const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        ))}
    </ul>
)

export default TodoList
