import React, { Component } from 'react'

class ReactKomponen1 extends Component {
    constructor(props) {
        super(props);
        this.state = {Counter : 0};
        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
        
    }
    
    Increment(){
        this.setState({Counter : this.state.Counter + 1})
    }
    Decrement(){
        this.setState({Counter : this.state.Counter - 1})
    }

    render() { 
        return (
            <div>
        <h1>Hello React</h1>
        <h3>Counter : {this.state.Counter}</h3>
        <button onClick={this.Increment}>+</button>
        <button onClick={this.Decrement}>-</button>
      </div>
          );
    }
}
 
export default ReactKomponen1;