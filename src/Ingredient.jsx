import './App.css';
import React from 'react';
import { X } from 'lucide-react';
import { MoveRight } from 'lucide-react'; 
import { ChefHat } from 'lucide-react';


 function Ingredient(props) {
    

    return(
        <section>
                <h1 style={{fontSize:30}}>Ingredients on hand ({props.count}):</h1>
            <div id = "all-ingredient">
                {props.ingredient.map((item,key) => (
                    <span className="capitalize"key={key}>{item}{"  "}<button onClick={() => props.remove(item)}className='remove-btn'><X size={28} color='black'/></button></span>
                ))}
            </div>
           { props.ingredient.length > 3 && <div className="get-recipe-container">
               <div>
                <ChefHat size={80}/>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.toggleRecipe}>{props.loadin} <MoveRight size={18} style={{top:'-10px',bottom:'50px'}}/></button></div>}
                </section>
    )
}

export default Ingredient;