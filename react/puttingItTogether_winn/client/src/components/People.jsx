import React, { Component } from "react";


class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      age : props.age
    }
  }
  addOne = () => {
    this.setState({
      age: (this.state.age + 1)
    })
  }

  render(){
    return(
      <div>
        <h1>
          {this.props.lastName}, {this.props.firstName}
        </h1>
        <p>
          Age: {this.state.age}
        </p>
        <p>
          Hair Color: {this.props.hairColor}
        </p>
        <button onClick={ this.addOne }>
          Happy Birthday
        </button>
      </div>
    )
  }
}





export default People;
