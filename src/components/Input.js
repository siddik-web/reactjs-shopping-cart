import React, { Component } from 'react'

class Input extends Component {

    render() {
        
        return (
            <div className="mb-3">
                 <label htmlFor={this.props.id} className="form-label">{this.props.children}</label>
                 <input type={this.props.type} name={this.props.name} className="form-control" id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.handleInput} />
            </div>
        )
    }
}

export default Input
