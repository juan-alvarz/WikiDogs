import axios from "axios";
import { getDogs } from "./slice";

interface DogI {
  name: string;
  height: string;
  weight: string;
  lifeSpan: string;
  temperament: string | null;
  image: string;
}

const URIBACK: string = "http://localhost:3001";

export const getAllDogs = () => async (dispatch: any) => {
  axios
    .get(`${URIBACK}/dog`)
    .then((r) => dispatch(getDogs(r.data)))
    .catch((e) => console.log(e));
};
