
import useAxios from "../useAxios";

const CategoryList=()=>{
    const [categoryies, ,loding]=useAxios({
        url:'/FoodCategory/categories'
    })

   // const render=()=>{
    //    if(loding)
      //  {
    //        return(<Loding theme={"primary"} ></Loding>)
     //   }
        
  //  }
    return(
        <ul className="nav nav-tabs d-flex justify-content-center" >
            {
                categoryies.map(category=>(

                     <li className="nav-item" key={category.id}>
            <a className="nav-link active show">
              <h4>{category.name}</h4>
              </a>
                  </li>
                ))
         
            }
        

        </ul>
    )
}
export default CategoryList