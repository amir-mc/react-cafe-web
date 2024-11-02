
import { useState } from 'react';
import './App.css';
import Aboutus from './component/aboutus';
import CategoryList from './component/category';
import Heder from './component/header';
import Hero from './component/hero';
import List from './component/list';
import useAxios from './useAxios';
 
function App() {
  const [url, setUrl]= useState('/FastFood/list');
  const [fastFoodItem , ,loading] = useAxios({
    url
  });
  return (
    <>
    <Heder/>
    <main className="main">
      <Hero/>
      <Aboutus></Aboutus>
      <CategoryList></CategoryList>
      <List fastFoodItem={fastFoodItem}></List>
      </main>
    </>
    
  )
}

export default App;
