import { useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

type GiftExpertAppProps = {
  defaultCategories?: string[];
};

const GiftExpertApp = ({ defaultCategories = []}: GiftExpertAppProps) => {
  const [categories, setCategories] = useState<string[]>( defaultCategories );

  return (
    <>
      <h1 id="title" className="text-center green">Gif Expert App</h1>

      <AddCategory setCategories={ setCategories } />

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
