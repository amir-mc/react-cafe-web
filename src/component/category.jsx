
import useAxios from "../useAxios";
//import Loding from "./Loading/loading";

const CategoryList=({filteritem})=>{
    const [categoryies, ,loding]=useAxios({
        url:'/FoodCategory/categories'
    })

    // const render=()=>{
    //     if(loding)
    //     {
    //     return(<Loding theme={"primary"} ></Loding>)
    //     }
        
    // }


    return(
        <ul className="nav nav-tabs d-flex justify-content-center" >
            {
                categoryies.map(category=>(

                     <li className="nav-item" key={category.id} onClick={()=>filteritem(category.id)}>
              <a href="/#" className="nav-link ">   <h2>
                {category.name}
                </h2>   </a>
            
                       
                  </li>
                ))
         
            }
        

        </ul>
    )
    
  
    
}
export default CategoryList
