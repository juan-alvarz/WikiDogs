import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "../redux/actions";
import store from "../redux/store";
import { DogI, AppDispatch } from "../../types";
import Card from "./Card";
import Footer from "./Footer";
import Paginated from "./Paginated";

function Home() {
  const { dogs } = useSelector((state: any) => state.wikidogs);
  //const dispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch<AppDispatch>();

  //========== paginated ================
  const [actualDog, setActualDog] = useState(1);
  const [dogsPage] = useState(6);
  const lastDog = actualDog * dogsPage;
  const firstDog = lastDog - dogsPage;
  //=====================================
  const [dogsFilter, setDogsFilter] = useState([]);
  const prev = () => {
    if (actualDog > 1) {
      setActualDog(actualDog - 1);
    }
  };
  const next = () => {
    if (actualDog < Math.ceil(dogs.length / dogsPage)) {
      setActualDog(actualDog - 1);
    }
  };
  const paginated = (pageNumber: number): void => {
    setActualDog(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  if (dogs.length !== 0) {
    console.log(dogs);
  }
  if (dogs.length !== 0) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {dogs.map((dog: DogI) => {
          return (
            <Card
              name={dog.name}
              temperament={dog.temperament}
              image={dog.image}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
/* 
<div className="grid grid-cols-4 gap-4">
      {dogs.map((dog: DogI) => (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={dog.image} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {dog.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {dog.temperament}
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
      <Footer />
    </div>
    
*/
export default Home;
