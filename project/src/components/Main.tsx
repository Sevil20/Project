// import React, { useState, useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
// import '../assets/css/Main.scss';
// import Loader from '../components/Loader';
// import popularRecipeReducer, {
//   selectPopularRecipesData,
//   selectPopularRecipesLoading,
//   selectPopularRecipesError,
//   RecipeInterface,
// } from '../redux/reducers/popularRecipes';
// import {fetchPopularRecipes} from '../redux/reducers/popularRecipes'


// const Main: React.FC = () => {
//   const dispatch = useAppDispatch();

//   // Define recipeIds that you want to fetch
//   const recipeIds = [123, 456, 789]; // Replace with your actual recipe IDs

//   // const handleFetchRecipes = () => {
//   //   recipeIds.forEach((id) => {
//   //     dispatch(fetchPopularRecipes(id));
//   //   });
//   // };

//   const popularRecipes = useAppSelector(selectPopularRecipesData);
//   const loading = useAppSelector(selectPopularRecipesLoading);
//   const error = useAppSelector(selectPopularRecipesError);



//   useEffect(() => {
//     dispatch(fetchPopularRecipes())
//       // .then((action) => {
//       //   console.log('Received data:', action.payload);
//       // });
//   }, [dispatch]);// Empty dependency array means it will run once on mount

//   const [searchValue, setSearchValue] = useState<string>('');

//   const handleSearch = () => {
//     // Logic to filter the data based on searchValue
//     // Update your data filtering logic here
//     const filteredRecipes = popularRecipes.results.filter((recipe) => {
//       // Assuming you want to filter by readyInMinutes
//       return recipe.readyInMinutes <= parseInt(searchValue);
//     });

//     setFilteredRecipes(filteredRecipes); // Set the filtered recipes in state
//   };

//   const [filteredRecipes, setFilteredRecipes] = useState<RecipeInterface[]>([]);

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className='container'>
//       <div className='main-page'>
//         <h1>Favorite Meals</h1>
//         <div className='search-bar'>
//           <input
//             type='number'
//             placeholder='Enter a number...'
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleSearch();
//               }
//             }}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         <div className='popular-btn-container'>
//           {filteredRecipes.length > 0 ? (
//             filteredRecipes.map((recipe: RecipeInterface) => (
//               <div className='category-group' key={recipe.id}>
//                 <img className='image' src={recipe.image} alt='Restaurant' />
//                 <p className='info'>{recipe.title}</p>
//                 <p className='info'>{recipe.healthScore}</p>
//               </div>
//             ))
//           ) : (
//             <div>No recipes found.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
