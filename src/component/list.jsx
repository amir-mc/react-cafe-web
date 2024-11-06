import { useThemecontext } from "../context"
import ItemList from "./listItem"


 
const List = ({fastFoodItem})=>{

const themeContext=useThemecontext()
const dark=themeContext.dark

    return(
        <div className=" row " >


            {
                
                fastFoodItem.map(List=>{
                    return(

                        <>
                         <div className= {`col-md-4 col-sm-6 tab-header ${dark ? 'bg-dark':'bg-light'} text-center`}>
                         <div className="row gy-5" key={List.id}>
                            
                                    <ItemList {...List} ></ItemList>
                            </div>
                
            </div>
         
                        </>
                       
                    )
                })
                

            }
            
          
           
          </div>
        
    )
}

export default List
