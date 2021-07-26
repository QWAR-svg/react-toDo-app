import React from 'react';
import deleteImg from '../../img/delete.png';
import importantImg from '../../img/important.png';

class TodoListItem extends React.Component  {

   
    render() {

        let Namee = "list-item ";
        let butn = "btn-important ";
        const {important,done,label, onToggleDone, onToggleImportant} = this.props
            return ( 
                <div className="wrapper-ul">
                <li  onClick={onToggleDone} className={done ? Namee +=" bold" : Namee += " very-bold"}>
                    <span>{label}</span>
                </li> 
                <button onClick={this.props.onDeleted} className="btn-delete"><img src={deleteImg} alt="" /></button>
                <button onClick={onToggleImportant}  className={important ? butn +=" impor" : butn += " "}><img src={importantImg} alt="" /></button>
                </div>
                )
        }
}
 
export default TodoListItem;