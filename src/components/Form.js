import React, {useState} from 'react'
import { useAnimalsContext } from '../context/AnimalContext';
import { newAnimal } from '../constant/animal';
import { ANIMAL_TYPE } from '../constant/animal';


const Form = () => {

  const {addAnimalToAnimalList} = useAnimalsContext();

 
  const [formValuse, setFormValuse] = useState(
    newAnimal
    );


   const handleChange = (event) =>{
    console.log(event.target.value)
    setFormValuse((prevValues) =>({
      ...prevValues,
     [event.target.name]: event.target.value,
  }));
  };
  

   const addAnimal = (event) => {
    event.preventDefault(); 
    addAnimalToAnimalList(formValuse);
    setFormValuse(newAnimal)

   }


  return (
    <form onSubmit={addAnimal} className='form-container'>
      <div>
     <input
      value={formValuse["name"]}
       name='name'
       onChange={handleChange}
       type='text' 
       placeholder='Enter Animal Name'/>

     <input 
     value={formValuse["imageSrc"]} 
     name='imageSrc' 
     onChange={handleChange} 
     type='text' 
     placeholder='Enter Image src'/>

     <input 
     value={formValuse["age"]} 
     name='age' 
     onChange={handleChange} 
     type='number' 
     min={0}/>
     </div>

     <div>
     <select 
      onChange={handleChange}
      name='type' 
      value={formValuse["type"]}>
      {ANIMAL_TYPE.map((option, i) =>(
        <option key={i} value={option.value}>
          {option.type}
          </option>
      ))}
     </select>
     <button type='submit'>Add</button>
     </div>
     <span>add animal to the zoo</span>
    </form>
  )
}

export default Form