import { useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GiftExpertApp = () => {
  const initialState: string[] = [];
  const [categories, setCategory] = useState<string[]>(initialState);

  return (
    <>
      <h1 className="text-center green">Gift Expert App</h1>

      <AddCategory setCategory={ setCategory } />

      <hr />

      {categories.map(category => (
        <GifGrid
          key={ category }
          category={ category }
        />
      ))}
    </>
  );
};

export default GiftExpertApp;
