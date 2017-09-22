import React from 'react';

const InputEditItem = (props) => {
  return (
    <input ref={props.inputRef} defaultValue={props.text} onSelect={props.onChange} onKeyUp={props.onKeyUp} autoFocus type="text"></input>
  )
}

export default InputEditItem;
