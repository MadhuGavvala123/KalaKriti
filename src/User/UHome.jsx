function UHome()
{
   return(
    <>
    <div className="container-fluid bg-success rounded-4 p-3">
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <div className="carousel slide w-100 mx-auto" id="plantCarousel" data-bs-ride="carousel" data-bs-interval="1200">
          <div className="carousel-indicators">
            <button data-bs-target="#plantCarousel" data-bs-slide-to="0" className="active"></button>
            <button data-bs-target="#plantCarousel" data-bs-slide-to="1"></button>
            <button data-bs-target="#plantCarousel" data-bs-slide-to="2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/carous1.webp" className="d-block w-100 carousel-img" ></img>
            </div>
            <div className="carousel-item">
              <img src="/assets/carous2.webp" className="d-block w-100 carousel-img" ></img>
            </div>
            <div className="carousel-item">
              <img src="/assets/carous3.webp" className="d-block w-100 carousel-img" ></img>
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-target="#plantCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" data-bs-target="#plantCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>

    </>
   )
}
 export default UHome;