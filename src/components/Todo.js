// 基本 Todo 展示组件 onClick改变 completed

import React from 'react'

const Todo = ({onClick, completed, text}) => (
    <li
      onClick={onClick}
      style={{
        textDecoration:completed ? 'line-through' : 'none'
      }}>
        {text}
    </li>
)
export default Todo
