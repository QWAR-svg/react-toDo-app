import React, { Component} from 'react';
import AppHeader from '../app-header/app-header';
import Input from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form/item-add-form';
import ItemsFilter from '../items-filter/items-filter';

class App extends Component {

    // const [time, setTime] = useState();
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Вчити React'),
            this.createTodoItem('Learn React'),
        ],
        term: ' ',
        filter: 'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        console.log(id)
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // todoData.splice(idx, 1);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        });
    }

 
    addItem = (text) => 
    {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            
            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};

            const newArray = [...todoData.slice(0, idx),newItem, ...todoData.slice(idx + 1)];

             return {
                 todoData: newArray
             };
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArray = [...todoData.slice(0, idx),newItem, ...todoData.slice(idx + 1)];

             return {
                 todoData: newArray
             };
        })
    } 

    onSearchChange = (term) => {
        this.setState({term})
    }

    search(items, term) {

        if(term === ' '  || "" ) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {

        switch(filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items

        }
    }

    onButton = (filter) => {
        this.setState({filter})
    }


    render() {

        const {term, todoData, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = this.state.todoData.filter((el) => {
            return el.done
        }).length;

        const todoCount = this.state.todoData.length - doneCount
        return (
            <div className="container">

                <AppHeader toDo={todoCount} done={doneCount} />
                <Input 
                onSearchChange={this.onSearchChange}
                />
                <ItemsFilter
                onButton={this.onButton}
                filter= {filter}
                />
                <ItemAddForm onItemAdded={this.addItem}/>

                <TodoList 
                deleted={this.deleteItem} 
                todos={visibleItems} 
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                />
            </div>
        )
    }
}

export default App;