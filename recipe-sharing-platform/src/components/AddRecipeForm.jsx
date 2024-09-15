
// src/components/RecipeForm.jsx

import React, { useState } from 'react';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = {};
    if (!title.trim()) errors.title = 'Title is required.';
    if (!ingredients.trim()) errors.ingredients = 'Ingredients are required.';
    if (ingredients.trim().split('\n').length < 2) errors.ingredients = 'At least two ingredients are required.';
    if (!instructions.trim()) errors.instructions = 'Instructions are required.';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    console.log({
      title,
      ingredients: ingredients.split('\n'),
      instructions,
    });
  };

  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Add a New Recipe</h1>
      {submitted && !Object.keys(errors).length && (
        <p className="text-green-500 text-center mb-4">Recipe submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md text-base md:text-lg`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-3 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md text-base md:text-lg`}
            rows="5"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-lg font-medium mb-2">Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-3 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-md text-base md:text-lg`}
            rows="5"
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-700 text-base md:text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
