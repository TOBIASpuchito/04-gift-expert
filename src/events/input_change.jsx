import React, { useState } from 'react';


export const InputChange = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => {
        setInputValue(e.target.value);
   
    }
   
    const onSumbitForm= (e) =>{
        e.preventDefault()
        if(inputValue.trim().length === 0) return;
        
        // action((categories) => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
       
        setInputValue('');
    }








    
    return(
        <form onSubmit={onSumbitForm} >
        <input type="text" placeholder="Busca un Gif" value={inputValue} onChange={(e)=> onInputChange(e)} />
        </form>
    )
}