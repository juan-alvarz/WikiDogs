import store from "./src/redux/store";

export type AppDispatch = typeof store.dispatch;

export interface DogI {
  name: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperament: string | null;
  image: string;
}

export interface initialStateI {
  dogs: DogI[];
  dogsFilter: DogI[];
  dog: DogI;
}
