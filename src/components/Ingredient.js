import React, { Component } from 'react'

export class Ingredient extends Component {
    state = {
        ingredients : [{ingredient:""}]
    }


    // handle input change
    handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.ingredients];
    list[index][name] = value;
    this.setState(list);
    };
    
    // handle click event of the Remove button
    handleRemoveClick = index => {
    const list = [...this.state.ingredients];
    list.splice(index, 1);
    this.setState(list);
    };
    
    // handle click event of the Add button
    handleAddClick = () => {
        this.setState([...this.state.ingredients, {ingredient:""}]);
        console.log(this.state.ingredients)
    };
    render() {
        return (
            <div className="row gy-2 gx-3 align-items-center">
                {this.state.ingredients.map((x, i) => {
                    return(
                        <div key={i}>
                            <div className="col-auto">
                                <label htmlFor="item" className="form-label">Item</label>
                                <input type="text" id="item"  onChange={e => this.handleInputChange(e, i)} value={x.ingredient} className="form-control"/>
                            </div>
                            <div className="col-auto">
                                {this.state.ingredients.length !== 1 && <button className="btn btn-primary mt-1">Remove</button>}
                                {this.state.ingredients.length - 1 === i && <button className="btn btn-primary mt-1" onClick={this.handleAddClick}>Add</button>}
                            </div>  
                        </div>
                    );
                })}

                <div style={{ marginTop: 20 }}>{JSON.stringify(this.state.ingredients)}</div>
                               
            </div>
        )
    }
}

export default Ingredient

