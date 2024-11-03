const ItemList=({name,price,imageUrl})=>{

    return(
        

        <div className=" menu-item  product-card">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src={imageUrl} className="menu-img img-fluid" alt=""/></a>
          <h4>food</h4>
          <p className="ingredients">
           {name}
          </p>
          <p className="price">
          {price}
          </p>
        </div>
    )
}
export default ItemList
