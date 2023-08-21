import React from 'react';
import '../assets/css/RecipeList.css';


interface RecipeInterface {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  // Add other properties
}

interface RecipesListProps {
  recipes: RecipeInterface[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <div>
      <div id="header">
        <h1>La Saveur</h1>
        <p>The Traditional French Taste</p>
      </div>
      <div className="container">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <div className="card" key={recipe.id}>
              <div className="card-image">
                <img src={recipe.image} alt={recipe.title} />
              </div>
              <div className="card-text">
                <p className="card-meal-type">Breakfast/Eggs</p>
                <h2 className="card-title">{recipe.title}</h2>
                <p className="card-body">{/* Add recipe description here */}</p>
              </div>
              <div className="card-price">
                Ready in {recipe.readyInMinutes} minutes | Servings: {recipe.servings}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipesList;
