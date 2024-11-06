import { useThemecontext } from "../context"

const ItemList=({name,price,imageUrl})=>{

  const themeContext=useThemecontext()
  const dark=themeContext.dark

    return(
        

        <div className=" menu-item  product-card">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src={imageUrl} className="menu-img img-fluid" alt=""/></a>
          <h4>food</h4>
          <p className={`ingredients ${dark ?  ' text-light': ' text-info'}`}>
           {name}
          </p>
          <p className={`price ${dark ?  ' text-light': ' text-info'}`}>
          {price}
          </p>
        </div>
    )
}
export default ItemList
