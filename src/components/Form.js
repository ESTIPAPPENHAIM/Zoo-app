import React, {useState} from 'react'
import Select from './Select'

const Form = ({addAnimalToAnimalList}) => {

  const [animal, setAnimal] = useState({ 
      name: "",
      type: '',
      age: 0,
      imageSrc: "",
  });

   const handelAnimalNameChange = (event) =>{
    setAnimal({...animal, name: event.target.value});
   }
   const handelAnimalImageSrcChange = (event) =>{
    setAnimal({...animal, imageSrc: event.target.value});
   }
   const handelAnimalAgeChange = (event) =>{
    setAnimal({...animal, age: event.target.value});
   }
   const handelAnimalTypeChange = (event) =>{
    setAnimal({...animal, type: event.target.value});
   }

   const addAnimal = (event) => {
    event.preventDefault(); 
    addAnimalToAnimalList(animal);
    setAnimal({name: "", type: '', age: 0, imageSrc: "",})
   }


  return (
    <form onSubmit={addAnimal} className='form-container'>
      <div>
     <input value={animal.name} onChange={handelAnimalNameChange} type='text' placeholder='Enter Animal Name'/>
     <input value={animal.imageSrc} onChange={handelAnimalImageSrcChange} type='text' placeholder='Enter Image src'/>
     <input value={animal.age} onChange={handelAnimalAgeChange} type='number' min={0}/>
     </div>
     <div>
     <Select animal={animal} handelAnimalTypeChange={handelAnimalTypeChange}/>
     <button type='submit'>Add</button>
     </div>
     <span>add animal to the zoo</span>
    </form>
  )
}

export default Form