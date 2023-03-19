import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); //... Copia los datos, hace un callback de categories, no se tuvo que traer como prop
    // setCategories(cat => [ 'valorant',...cat]) //Otra forma
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory} //Mando la funcion al hijo, para que solos sea ponerle el argumento
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
