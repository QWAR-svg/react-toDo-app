import React, {Component} from 'react'

class Input extends Component {
  state = {
    term: ''
  }

  onSearchChange = (e) => {
    const term  = e.target.value;
    this.setState({ term })
    this.props.onSearchChange(term);
  } 
    render() {
      return (
        <div>
          <input className="input-item" type="text" name="" id=""
          value={this.state.term}
          onChange={this.onSearchChange}
          />
          
          
        </div>
      )
    }

  }

  export default Input;