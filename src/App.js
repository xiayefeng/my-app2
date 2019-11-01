import React, {useState, useEffect} from 'react'
import InputNumber from './components/InputNumber'
// import confirm from './components/confirmDialog/ConfirmDialog'

export default function App () {
  const [value, setValue] =  useState('aaa')

  useEffect(() => {
    console.log(1)
  }, [])
  return (
    <div>
      <InputNumber value={value} onChange={val => {
        setValue(val)
      }} />
      <InputNumber defaultValue={value} onChange={val => {
        // setValue(val)
      }} />
      <br />
      {/* <button onClick={() => {
        confirm.show({content: '确定退出吗？'})
      }}>点击我</button> */}
    </div>
  )
}
