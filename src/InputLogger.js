import React from 'react';

class InputLogger extends React.Component{
  changeHandler = (evt) =>{
    console.log(evt.target.value);
  }
  
  render(){
    return <input type='text' onChange={this.changeHandler}/>;
  }
}

export default InputLogger;
