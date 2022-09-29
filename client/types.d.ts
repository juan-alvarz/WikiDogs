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
export interface DogCardI {
  name: string;
  temperament: string | null;
  image: string;
}
//export type DogCardI = Pick<DogI, "name" | "temperament" | "image">;
