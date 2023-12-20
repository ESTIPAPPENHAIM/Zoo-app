import React, {useState} from 'react'


const Animal = ({animal, deleteAnimal}) => {



  return (
    <>
   <tr >
    <th>{animal.name}</th>
    <th>{animal.type}</th>
    <th>{animal.age}</th>
    <th><img src={animal.imageSrc}/></th>
    <th>
    <button onClick={() => deleteAnimal(animal.id)} style={{marginTop: '5px', color: '#303952'}}>Delete</button>
    </th>
  </tr>
  </>
  )
}

export default Animal