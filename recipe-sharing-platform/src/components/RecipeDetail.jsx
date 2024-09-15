

    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import recipeData from '../data.json'; // Assuming data.json is in src folder
    
    const RecipeDetail = () => {
      const { recipeId } = useParams(); // Get recipeId from URL parameters
      const [recipe, setRecipe] = useState(null); // Recipe state
      const [loading, setLoading] = useState(true); // Loading state
      const [error, setError] = useState(null); // Error state
    
      useEffect(() => {
        // Find the recipe with the matching ID from the data.json file
        const selectedRecipe = recipeData.find(r => r.id === parseInt(recipeId));
        
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          setError('Recipe not found');
        }
        
        setLoading(false); // Once the data is fetched, stop loading
      }, [recipeId]); // Runs when recipeId changes
    
      if (loading) {
        return <p className="text-center">Loading recipe details...</p>;
      }
    
      if (error) {
        return <p className="text-center text-red-500">{error}</p>;
      }
    
      return (
        <div className="container mx-auto p-6">
          {recipe ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-6">{recipe.title}</h1>
              <img
                src={recipe.image} // Assuming there's an image property in the recipe data
                alt={recipe.title}
                className="w-full max-w-lg mx-auto rounded-lg shadow-md mb-6"
              />
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside mb-6">
                {recipe.summary.map((summary, index) => (
                  <li key={index}>{summary}</li>
                ))}
              </ul>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <p className="mb-6">{recipe.summary}</p>
            </>
          ) : (
            <p className="text-center text-red-500">Recipe not found</p>
          )}
        </div>
      );
    };
    
    export default RecipeDetail;
    












