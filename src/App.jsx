import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ingredient from './Ingredient.jsx'
import Recipe from './Recipe.jsx'
// import { getRecipeFromMistral } from '../ai.js'
import {getRecipe} from '../ai.js'

function App() {
    const [ingredient, setIngredient] = useState(['']);
    const [loading,setLoading] = useState(false)
    
    function handleSubmit(formData) {
        const newIngredient = formData.get('ingredient');
        // console.log(newIngredient);
        if(!newIngredient) return;
        
         if (ingredient.includes(newIngredient.toLowerCase())) {
            alert("Ingredient already added");
            
        } else {
            setIngredient(prevIngredient => [...prevIngredient, newIngredient]);
        }

    }
    const[recipeShown, setRecipeShown] = useState(false);
    const [aiRecipe , setAiRecipe ] = useState('');
    // console.log(aiRecipe);

    async function toggleRecipe() {
        setLoading(true)
        const genRecipe = await getRecipe(ingredient);
        
        setAiRecipe(genRecipe);
        setLoading(false)
        
    }


    function handleRemove(toRemove){
       setIngredient(prev => prev.filter(item => item !== toRemove));
        console.log(ingredient)
    }
    
    // This function handles the form submission
    return (
        <main>
            <h2 className='h2'>What's in your kitchen?</h2>
            <p className='p'>Add ingredients to discover amazing recipes</p>
            <form  action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    id='ingredient'
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button > +Add ingredient</button>
            </form>
            {ingredient.length > 0 && 
            <Ingredient  
            ingredient={ingredient} 
            count ={ingredient.length}
            toggleRecipe={toggleRecipe}
            remove={handleRemove} 
            loadin = {loading ? "Generating" : "Get A Recipe"} />}
            {aiRecipe && <Recipe recipe={aiRecipe} />}

        </main>
    )
}

export default App;
