import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

const [category, setCategory] = useState([]);
const onAddCategory=(newCategory)=>{

  if(category.includes(newCategory)) return;
  setCategory([newCategory, ...category]);
};

  return (
    <>
    <h1>Gif Expert App</h1>
    <AddCategory onNewCategory={onAddCategory}/>
    {category.map((category)=>(
      <GifGrid 
        key={category} 
        category={category}/>
    ))
    }
    </>
  )
}
 