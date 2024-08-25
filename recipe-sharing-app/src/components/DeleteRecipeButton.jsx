import React from "react";
import { useState } from 'react';
  import { useRecipeStore } from './recipeStore';
  ["useNavigate", "deleteRecipe", "button"]
  const Delete = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Delete ;