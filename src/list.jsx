import ItemList from "./listItem"

const List = ({fastFoodItem})=>{

    return(
        <div className=" row " >


            {
                
                fastFoodItem.map(List=>{
                    return(

                        <>
                         <div className=" col-md-4 col-sm-6 tab-header text-center" key={List}>
                         <div className="row gy-5">
                            
                                    <ItemList {...List}></ItemList>
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
