import React, { Component } from 'react';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({ title: '' });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex', maxWidth: '200px', margin: '20px' }}>
            <input 
                type="text"
                name="title"
                style={{ flex: '10', padding: '5px'}}
                placeholder="Add To-Do..."
                value={this.state.title}
                onChange={this.onChange}
                />
            <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}} 
                />
        </form>
        )
    }
}

export default AddToDo;
