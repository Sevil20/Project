import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import { fetchCardDetailData, selectCardDetailData, selectCardDetailLoading, selectCardDetailError } from '../redux/reducers/cardDetailReducer';
import Loader from './Loader';
import '../assets/css/CardDetailPage.scss';
import Header from './Header';


const CardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipeInfo = useAppSelector(selectCardDetailData);
  const loading = useAppSelector(selectCardDetailLoading);
  const error = useAppSelector(selectCardDetailError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCardDetailData(parseInt(id)));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipeInfo) {
    return <div className='card-not-available'>No data available</div>;
  }

  // Destructure the relevant properties from the recipeInfo object
  const {
    title,
    image,
    summary,
    instructions,
    servings,
    preparationMinutes,
    cookingMinutes,
    cuisines,
    diets,
    extendedIngredients,
  } = recipeInfo;

  return (
   <>
             <Header/>

    <div className="recipe-details">
      <h2 className="recipe-title">{title}</h2>
      <img className="recipe-image" src={image} alt={title} />
      <div className="recipe-summary" dangerouslySetInnerHTML={{ __html: summary }} />
      <h3>Instructions:</h3>
      <div className="recipe-instructions" dangerouslySetInnerHTML={{ __html: instructions }} />
      <div className="recipe-details">
        <p>Servings: {servings}</p>
        <p>Preparation Time: {preparationMinutes} minutes</p>
        <p>Cooking Time: {cookingMinutes} minutes</p>
        <p>Cuisines: {cuisines.join(', ')}</p>
        <p>Diets: {diets.join(', ')}</p>
      </div>
      <h3>Ingredients:</h3>
      <ul className="recipe-ingredients">
        {extendedIngredients.map((ingredient: { original: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
   </>

  )
        }
export default CardDetailPage;
