import React from 'react';

const InputEditItem = (props) => {
  return (
    <input defaultValue={props.text} onChange={props.onChange} onKeyUp={props.onKeyUp}></input>
  )
}

export default InputEditItem;
