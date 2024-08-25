import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/recipeStore'

function App() {
 

  return (
    <>
      
      <RecipeList />
      <AddRecipeForm />
      <useRecipeStore />
    </>
  )
}

export default App
