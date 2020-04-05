import React from 'react';
import CountClickChild from './CountClickChild';

class CountClickParent extends React.Component{

  myHandler = () =>{
    alert('this is App.myHandler')
  }
  
  state = {counter : 0}

  counterPlus = () =>{
    this.setState({counter : this.state.counter + 1})
  }

  render(){
    return(
    <div>
      <CountClickChild someFunction = {this.myHandler}/>

      <CountClickChild counterPlus = {this.counterPlus}/>
      <p>{this.state.counter}</p>
    </div> 
    );
  }
}

export default CountClickParent;
