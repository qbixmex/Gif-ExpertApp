import { Image, Gif } from "../Interfaces";

const api_key = "iGe4xB2YJhkdbjEBfOUqBMEXzhVeDHxJ";

export const getGifs = async (category: string): Promise<Gif[]> => {
  let url = `https://api.giphy.com/v1/gifs/search`;
  url += `?q=${encodeURI(category)}`;
  url += `&limit=6`;
  url += `&api_key=${api_key}`;

  const response: Response = await fetch(url);
  const { data } = await response.json();
  const gifs: Gif[] = data.map((img: Image): Gif => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    };
  });

  return gifs;
};
