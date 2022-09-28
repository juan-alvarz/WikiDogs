import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDogs } from "../redux/actions";
import store from "../redux/store";
import { DogI, AppDispatch } from "../../types";

function Home() {
  const { dogs } = useSelector((state: any) => state.wikidogs);
  //const dispatch = useDispatch<AppDispatch>();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);
  if (dogs.length !== 0) {
    console.log(dogs);
  }
  return (
    <div>
      {dogs.map((dog: DogI) => (
        <div>
          {dog.name}
          {dog.weight}
        </div>
      ))}
    </div>
  );
}

export default Home;
