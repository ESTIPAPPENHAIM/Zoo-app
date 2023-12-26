import { useContext, createContext, useState } from "react";
import { ANIMALS } from "../data/animaiData";
import { v4 as uuid } from 'uuid'

const animalslContext = createContext();


export default function AnimalProvider({children}){

    
    
    const [animalList, setAnimalList ] = useState(ANIMALS);
    
      const addAnimalToAnimalList = (animal) =>{
        if (animal.name === '' || animal.type === '' || animal.age === 0 || animal.imageSrc === ''){
          alert("One or more of the details is missing");
          return
        }
        else{
        const newAnimal = { id:uuid(), ...animal}
        setAnimalList([...animalList, newAnimal]);
        
        }
      }
    
        const deleteAnimalById = (id) =>{
         const newAnimalList = animalList.filter(animal => animal.id !== id);
         setAnimalList(newAnimalList);
         console.log(newAnimalList)
        }  
    
        console.log(animalList)



return(
    <animalslContext.Provider value={{addAnimalToAnimalList,animalList, deleteAnimalById} }>
        {children}
    </animalslContext.Provider>

)
};

export function useAnimalsContext() {
    return useContext(animalslContext);
};
