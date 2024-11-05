import useAxios from "../useAxios"
import CategoryList from "./category"

const Commenets=()=>{
    const [coment, ,loding]=useAxios({
        url:'/Comments'
    })

    return(
        <>
        {
            coment.map(Comment=>(
                <section id="testimonials" className="testimonials section light-background">
           
                <div className="container section-title" >
                  <h2>TESTIMONIALS</h2>
                  <p>What Are They <span className="description-title">Saying About Us</span></p>
                </div>
          
                <div className="container" >
          
                  <div className="swiper init-swiper">
                    
                      
                   
                    <div className="swiper-wrapper">
                    




            <div className="swiper-slide">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>{Comment.description}</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>{Comment.name}</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt=""/>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>

    </section>
            ))
        }
        </>
    )
   
}
export default Commenets
