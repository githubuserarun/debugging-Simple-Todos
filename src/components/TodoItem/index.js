import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, todoEdit, statusChange} = props
  const {id, btnStatus, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onEditTodo = event => {
    todoEdit(event.target.value, id)
  }

  const changeBtn = () => {
    statusChange(id)
  }

  return (
    <li className="todo-item">
      <div>
        {btnStatus ? (
          <input
            className="editable-input"
            type="text"
            onChange={onEditTodo}
            value={title}
          />
        ) : (
          <label>
            <input type="checkbox" id="todo" className="title" value={title} />
            <span className="todo-Title">{title}</span>
          </label>
        )}
      </div>

      <div className="todo-button">
        <button type="button" className="btn" onClick={onDeleteTodo}>
          Delete
        </button>
        {btnStatus ? (
          <button type="button" className="btn" onClick={changeBtn}>
            save
          </button>
        ) : (
          <button type="button" className="btn" onClick={changeBtn}>
            Edit
          </button>
        )}
      </div>
    </li>
  )
}

export default TodoItem
