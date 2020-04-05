import React from 'react';

class InputLogger extends React.Component{

  state = { inputval : 'Enter Here'}

  changeHandler = (evt) =>{
    this.setState({inputval : evt.target.value});
  }
  
  render(){
    return(
    <div>
      <input type='text' onChange={this.changeHandler}/>
      <p>{this.state.inputval}</p>
    </div> 
    );
  }
}

export default InputLogger;
