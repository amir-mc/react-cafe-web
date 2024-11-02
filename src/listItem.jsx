const ItemList=({name})=>{

    return(
        <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox"><img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
          <h4>{name}</h4>
          <p className="ingredients">
           {name}
          </p>
          <p className="price">
          {name}
          </p>
        </div>

      </div>
    )
}
export default ItemList
