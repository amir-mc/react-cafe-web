
import { useState } from 'react';
import './App.css';
import Aboutus from './component/aboutus';
import CategoryList from './component/category';
import Heder from './component/header';
import Hero from './component/hero';
import List from './component/list';
import useAxios from './useAxios';
import Commenets from './component/comment';
 
function App() {
  const [url, setUrl]= useState('/FastFood/list');
  const [fastFoodItem , ,loading] = useAxios({
    url
  });
  const filteritem=(categoryId)=>{
    setUrl(`/FastFood/list/${categoryId ? '?categoryId=' + categoryId:'' }`)
  }
  return (
    <>
    <Heder/>
    <main className="main">
      <Hero/>
      <Aboutus></Aboutus>
      <CategoryList filteritem={filteritem}></CategoryList>
      <List fastFoodItem={fastFoodItem}></List>
      <Commenets></Commenets>
      </main>
    </>
    
  )
}

export default App;
