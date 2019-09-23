import React, { Component } from 'react'

class AddTodo extends Component {
state={
    content: ''
}

handleChange = (e) => {
this.setState({
    content: e.target.value
})
}
handlesubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
        content: ''
    })
}

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Add new todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo