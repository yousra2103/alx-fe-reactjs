import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import useRecipeStore from './components/recipeStore'
import RecipeDetails from './components/RecipeDetails'
import RecipeForm from './components/EditRecipeForm'
import Delete from './components/DeleteRecipeButton';

function App() {
 

  return (
    <>
      <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<RecipeManager />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* Recipe Details Route */}
          <Route path="/delete" element={<DeleteRecipeButton />} />
        </Routes>
      </div>
    </Router>
      
      <RecipeList />
      <AddRecipeForm />
      <useRecipeStore />
      <RecipeDetails />
      <RecipeForm />
      <Delete />
    </>
  )
}

export default App
