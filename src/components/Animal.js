import React from 'react'
import { useViaAnimalContext, useDeleteAnimalContext } from '../context/zooContext'


const Animal = () => {

  const animal = useViaAnimalContext();
  const deleteAnimal = useDeleteAnimalContext();

  return (
    <>
    {animal.map((animal) =>(
      <tr key={animal.id} >
    <th>{animal.name}</th>
    <th>{animal.type}</th>
    <th>{animal.age}</th>
    <th><img src={animal.imageSrc} alt='animalImg'/></th>
    <th>
    <button onClick={() => deleteAnimal(animal.id)} style={{marginTop: '5px', color: '#303952'}}>Delete</button>
    </th>
  </tr>
  ))}
   
  </>
  )
}

export default Animal