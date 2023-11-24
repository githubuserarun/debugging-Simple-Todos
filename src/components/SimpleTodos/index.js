/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    btnStatus: false,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    btnStatus: false,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    btnStatus: false,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    btnStatus: false,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    btnStatus: false,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    btnStatus: false,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    btnStatus: false,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    btnStatus: false,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
    addTodo: '',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeInputValue = event => {
    this.setState({
      addTodo: event.target.value,
    })
  }

  onAddTodo = () => {
    const {todosList, addTodo} = this.state
    const newTodo = [
      ...todosList,
      {id: todosList.length + 1, btnStatus: false, title: addTodo},
    ]
    this.setState({
      todosList: newTodo,
    })
    this.setState({
      addTodo: '',
    })
  }

  onEditTodos = (value, id) => {
    const {todosList} = this.state
    const updatedList = todosList.map(
      each => each.id === id((each.title: value)),
    )
  }

  onChangeStatus = todoId => {
    const {todosList} = this.state
    const found = todosList.findIndex(element => element.id === todoId)
    console.log(found)
    const dummy = todosList[found].btnStatus
    todosList[found].btnStatus = !dummy
    this.setState({
      todosList,
    })
  }

  render() {
    const {todosList, addTodo} = this.state
    console.log(todosList)
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="todo-input-container">
            <input
              className="todo-input"
              type="text"
              value={addTodo}
              onChange={this.onChangeInputValue}
              placeholder="Take a Note..."
            />
            <button
              className="todo-add-button"
              type="button"
              onClick={this.onAddTodo}
            >
              Add
            </button>
          </div>

          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                todoEdit={this.onEditTodos}
                statusChange={this.onChangeStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
