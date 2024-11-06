
import { useThemecontext } from "../context";
import useAxios from "../useAxios";
//import Loding from "./Loading/loading";


const CategoryList=({filteritem})=>{
    const [categoryies, ,loding]=useAxios({
        url:'/FoodCategory/categories'
    })


    const themect=useThemecontext()
const dark=themect.dark


    // const render=()=>{
    //     if(loding)
    //     {
    //     return(<Loding theme={"primary"} ></Loding>)
    //     }
        
    // }


    return(
        <ul className= {`nav nav-tabs d-flex justify-content-center ${ dark ?  'bg-dark text-light': 'bg-light text-info'}`} >
            {
                categoryies.map(category=>(

                     <li className="nav-item" key={category.id} onClick={()=>filteritem(category.id)}>
              <a href="/#" className={`nav-link ${ dark ?  ' text-light': ' text-info'}`} >   <h2 className={` ${ dark ?  ' text-light': ' text-info'}`}>
                {category.name}
                </h2>   </a>    
            
                       
                  </li>
                ))
         
            }
        

        </ul>
    )
    
  
    
}
export default CategoryList
