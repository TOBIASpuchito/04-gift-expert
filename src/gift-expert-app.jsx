import React, { useState } from 'react';
import { InputChange } from './events/input_change';
import { GridGiff } from './components/grid_giff';


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch',]);
    const onAddCategorie= (event) => {
        if (categories.includes(event))  return;
            
        
        setCategories((categories) => [event, ...categories]);
    }

    
  return (
    <>
    {/* titulo */}
    <h1>desde gif app</h1>
    {/* <button onClick={onAddCategorie}>AÑADIR CATEGORIA</button> */}
    {/* input  */}
    <InputChange 
    // action = {setCategories} 
    onNewCategory = {event => onAddCategorie(event) }
    />

    
    
     {
        categories.map((categorie) => (
            <GridGiff key={categorie} categorie={categorie} />
        ))
     }
   

    </>
  );
}