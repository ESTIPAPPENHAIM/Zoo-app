import React from 'react'
import Animal from './Animal'
import { useViaAnimalContext, useDeleteAnimalContext } from '../context/zooContext'

const Table = () => {

  const animal = useViaAnimalContext();
  const deleteAnimal = useDeleteAnimalContext();

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