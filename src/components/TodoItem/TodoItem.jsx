import React from 'react'

function TodoItem({todoItem}) {
    return (
        <div>
            <input id={`todo-${todoItem.id}`} type="checkbox" defaultChecked={todoItem.completed} />
            <label for={`todo-${todoItem.id}`} htmlFor="">{todoItem.title}</label>
        </div>
    )
}

export default TodoItem
