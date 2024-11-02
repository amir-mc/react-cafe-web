import ItemList from "./listItem"

const List = ({fastFoodItem})=>{

    return(
        <div className="tab-content" >

          <div className="tab-pane fade active show" id="menu-starters">
            {
                fastFoodItem.map(List=>{
                    return(

                        <>
                         <div className="tab-header text-center" key={List}>
              <p>Menu</p>
              <h3>Starters</h3>
                 <ItemList {...List}></ItemList>
            </div>
         
                        </>
                       
                    )
                })
                

            }
            
            <ItemList/>
           
          </div>
          </div>
    )
}

export default List
