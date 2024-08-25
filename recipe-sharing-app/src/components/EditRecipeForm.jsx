import { useRecipeStore } from './recipeStore';

const RecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  return (
    ["form", "event.preventDefault", "button"]
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};
export default RecipeForm ;