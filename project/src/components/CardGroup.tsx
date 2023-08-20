import React, { useEffect } from 'react';
import { fetchCardGroupData } from '../redux/reducers/cardGroupReducer';
import { RootState } from '../redux/store/store';
import '../assets/css/CardGroup.scss';
import Loader from '../components/Loader';
import { useAppSelector, useAppDispatch } from '../redux/store/hooks'; // Use the custom hooks
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

const CardGroup: React.FC = () => {
  const dispatch = useAppDispatch(); // Use the custom hook

  const { data, loading, error } = useAppSelector((state: RootState) => state.cardGroup); // Use the custom selector hook

  useEffect(() => {
    dispatch(fetchCardGroupData())
      // .then((action) => {
      //   console.log('Received data:', action.payload);
      // });
  }, [dispatch]);

  return (
    <div className="card-group">
      {loading ? (
        <div className='card-group-loader'>
          <Loader />
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : data && data.results.length > 0 ? (
        data.results.slice(0, 9).map((recipe: Recipe) => (
          <div className="card-hover" key={recipe.id}>
            <Link to={`/card/${recipe.id}`}>
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  Make your <span>choice</span> right now!
                </h3>
                <p className="card-hover__text">{recipe.title}</p>
                <span className="card-hover__link"> {/* Change <a> to <span> */}
                  <span>Learn How</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12 13.5 19.5M21 12H3" />
                  </svg>
                </span>
              </div>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </div>
        ))
      ) : (
        <div className='card-not-available'>No data available</div>
      )}
    </div>
  );
};

export default CardGroup;

