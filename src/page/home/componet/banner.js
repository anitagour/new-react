import React from 'react'

const Banner = () => {
  return (
    <>
      <div id="carouselExampleInterval" className="carousel slide carousel-fade  " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="img/banner-1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="img/banner-2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000"> 
      <img src="img/banner-3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000"> 
      <img src="img/banner-4.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Banner;
