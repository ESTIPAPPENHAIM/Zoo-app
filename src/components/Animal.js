import React from 'react'
import { useAnimalsContext } from '../context/AnimalContext'


const Animal = () => {

  const {animalList,deleteAnimalById} = useAnimalsContext();
console.log(animalList)
  return (
    <>
    {animalList.map((animal) =>(
      <tr key={animal.id} >
    <th>{animal.name}</th>
    <th>{animal.type}</th>
    <th>{animal.age}</th>
    <th><img src={animal.imageSrc} alt='animalImg'/></th>
    <th>
    <button onClick={() => deleteAnimalById(animal.id)} style={{marginTop: '5px', color: '#303952'}}>Delete</button>
    </th>
  </tr>
  ))}
   
  </>
  )
}

export default Animal