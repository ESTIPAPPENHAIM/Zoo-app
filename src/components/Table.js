import React from 'react'
import Animal from './Animal'

const Table = () => {

  return (
    <div className='table-container'>
        <table>
<thead  className='thead-table-style'>
  <tr >
    <th>name</th>
    <th>type</th>
    <th>age</th>
    <th style={{width: "40%"}}>photo</th>
    </tr>
</thead>
<tbody>
<Animal/>
 </tbody>
        </table>
    </div>
  )
}

export default Table