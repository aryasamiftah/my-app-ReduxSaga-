import React, { Component } from "react";

class ReactComponent extends Component {
  state = { Counter: 0 };
  Increment (){
    this.setState({Counter : this.state.Counter + 1});
  }
  Decrement = ()=>{
    this.setState({Counter : this.state.Counter - 1});
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <h3>Counter : {this.state.Counter}</h3>
        <button onClick={()=>this.Increment()}>+</button>
        <button onClick={this.Decrement}>-</button>
      </div>
    );
  }
}

export default ReactComponent;
