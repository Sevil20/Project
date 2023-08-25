import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { fetchCardGroupData } from "../redux/reducers/cardGroupReducer";
import { RootState } from "../redux/store/store";
import "../assets/css/CardGroup.scss";
import Loader from "../components/Loader";
import { useAppSelector, useAppDispatch } from "../redux/store/hooks";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

const CardGroup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { recipeList, loading, error, totalResults } = useAppSelector(
    (state: RootState) => state.cardGroup
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCardGroupData(currentPage));
  }, [currentPage]); // Make sure to add currentPage as a dependency to the useEffect

  async function handlePageChange(page: number): Promise<void> {
    setCurrentPage(page);
  }

  if (loading) {
    return (
      <div className="card-group-loader">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!recipeList.length) {
    return <div className="card-not-available">No data available</div>;
  }

  return (
    <>
      <div className="card-group">
        {recipeList.map((recipe: Recipe) => (
          <div className="card-hover" key={recipe.id}>
            <Link to={`/card/${recipe.id}`}>
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  Make your <span>choice</span> right now!
                </h3>
                <p className="card-hover__text">{recipe.title}</p>
                <span className="card-hover__link">
                  <button>
                    <span>Learn How</span>
                  </button>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12 13.5 19.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        style={{ margin: "70px" }}
        current={currentPage}
        total={totalResults} // Set the total prop to the totalResults value
        pageSize={20}
        onChange={handlePageChange}
      />
    </>
  );
};

export default CardGroup;
