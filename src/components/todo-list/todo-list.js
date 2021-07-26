import React, {Component} from "react";
import TodoListItem from "../todo-list-item/todo-list-item";




export default class TodoList extends Component {


  render() {
    const {todos, onToggleImportant, onToggleDone} = this.props
    

    return (
      <ul className="ul-tag">
          {todos.map((item) => {
            const {id, ...todosProps} = item;
   
            return (
              
            <div key={id}>
               {<TodoListItem
               onDeleted={() => this.props.deleted(id)}
               {...todosProps}
               onToggleImportant={() => onToggleImportant(id)}
               onToggleDone={() => onToggleDone(id)}

               />}
            </div>)
          })}
      </ul>
    )
  }
}
