import React, {useState} from 'react'
import InputNumber from './components/InputNumber'

export default function App () {
  const [value, setValue] =  useState('aaa')

  return (
    <div>
      <InputNumber value={value} onChange={val => {
        setValue(val)
      }} />
      <InputNumber defaultValue={value} onChange={val => {
        setValue(val)
      }} />
    </div>
  )
}
