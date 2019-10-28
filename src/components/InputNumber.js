import React from 'react'

function InputNumber(props) {
  var isControl = Reflect.has(props, 'value')
  var val = isControl ? props.value : props.defaultValue
  
  return (
    <>
    {isControl ? <input value={val} onChange={e => props.onChange(e.target.value)} /> : <input defaultValue={val} onChange={e => props.onChange(e.target.value)} />}
    </>
  )
}

export default InputNumber