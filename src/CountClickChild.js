import React from 'react';

function CountClickChild(props)
{
    return(
    <div>
      <button onClick={props.someFunction}>ClickMe</button>
      <button onClick={props.counterPlus}>Counter Click</button>
    </div>
    ); 
}
export default CountClickChild;
