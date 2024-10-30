
import './App.css';
import Aboutus from './component/aboutus';
import CategoryList from './component/category';
import Heder from './component/header';
import Hero from './component/hero';
 
function App() {
  return (
    <>
    <Heder/>
    <main className="main">
      <Hero/>
      <Aboutus></Aboutus>
      <CategoryList></CategoryList>
      </main>
    </>
    
  )
}

export default App;
