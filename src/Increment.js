import React from 'react';

class Increment extends React.Component{

  state = {counter : this.props.initVal}

  increment = () =>{
    this.setState({counter : this.state.counter + 1});
  }
  
  render(){
    return (
      <div>
        <button onClick={this.increment}> Click Here </button>
        <p> {this.state.counter} </p>
        </div>
      );
  }
}

export default Increment;
