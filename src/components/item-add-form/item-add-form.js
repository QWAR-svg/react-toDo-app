import React, {Component} from 'react';

export default class ItemAddForm extends Component{

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label)
        }
        this.setState({label: ''})
    }
    render() {
        return (
            <form className="item-form"
            
            onSubmit={this.onSubmit}> 
            <input className="input-item" type="text" 
            onChange={this.onLabelChange}
            placeholder="What do you want"
            value = {this.state.label} />

                <button className="btn"
               
                >Add element</button>
            </form>
        )
    }
}