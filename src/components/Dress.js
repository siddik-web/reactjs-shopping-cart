import React, { Component } from 'react'
import { uuid } from 'uuidv4'
import Input from './Input'


export class Dress extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            quantity: 0,
            price:0.0,
            sizes: []
        }
       
    }
    

    handleQuantityInput = (e) => {
        this.setState({quantity:e.target.value})
        this.setState({sizes:[...this.state.sizes,<Input></Input>]})
    }

    handleInput = (e) => {
        this.setState({price:e.target.value})
    }

    renderSizeInput = () => {
       let i = 0;
       let res = []
        while (i < this.state.quantity) {
            i++;
            res[i] = <Input type="text" name="size[]" id={i} key={i}>Size</Input>
        }
        
        return res;
    }

    render() {
        return (
            <div>
               <Input handleInput={this.handleQuantityInput} type="number">Quantity</Input>
               <Input handleInput={this.handleInput} type="text">price</Input>
               <div className="col-3">{this.renderSizeInput()}</div>
               {this.state.price}
               {this.state.sizes.map((i) => i)}
            </div>
        )
    }
}

export default Dress
