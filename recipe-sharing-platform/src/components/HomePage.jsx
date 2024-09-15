import React, { useState, useEffect } from 'react';


const HomePage = () => {
  // Step 1: Initialize state to hold the recipe data
  const [recipes, setRecipes] = useState([]);

  // Step 2: Fetch data from the JSON file when the component mounts
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))  // Step 3: Update state with the fetched data
      .catch(error => console.error('Error fetching recipes:', error));
  }, []); // Empty dependency array ensures it runs once after the component mounts

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>
    {recipes.length === 0 ? (
      <p className="text-center">Loading recipes...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">{recipe.title}</h2>
            <p className="mb-2">
              <strong>Ingredients:</strong> {recipe.summary}
            </p>
            <p className="mb-4">
              <strong>EXAMPLE</strong> {recipe.iMAGE}
            </p>
            <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default HomePage;
