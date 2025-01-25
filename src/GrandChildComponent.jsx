import React,{useContext} from 'react'
import {myContext} from './App'
export default function GrandChildComponent() {
    const value = useContext(myContext)

  return (
      <div>GrandChildComponent,value={value}</div>
  )
}
