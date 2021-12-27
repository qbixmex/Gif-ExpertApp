import { Gif } from "../Interfaces";
import { useState, useEffect } from "react"
import { getGifs } from '../Helpers/getGifs';

type State = {
  data: Gif[];
  loading: boolean;
};

const useFetchGif = (category: string): State => {
  const initialState: State = {
    data: [],
    loading: true
  };

  const [state, setState] = useState<State>(initialState)

  useEffect(() => {
    getGifs( category )
    .then(images => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [ category ]);

  return state;
}

export default useFetchGif;
