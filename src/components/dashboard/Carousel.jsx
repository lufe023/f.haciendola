import React from 'react'

const Carousel = () => {
  return (

    <div className="card card-carousel overflow-hidden h-100 p-0">
      <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-inner border-radius-lg h-100">
          <div className="carousel-item h-100 active" style={{backgroundImage: 'url("./assets/img/carousel-1.jpg")', backgroundSize: 'cover'}}>
            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i className="ni ni-camera-compact text-dark opacity-10" />
              </div>
              <h5 className="text-white mb-1">Get started with Argon</h5>
              <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
            </div>
          </div>
          <div className="carousel-item h-100" style={{backgroundImage: 'url("./assets/img/carousel-2.jpg")', backgroundSize: 'cover'}}>
            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i className="ni ni-bulb-61 text-dark opacity-10" />
              </div>
              <h5 className="text-white mb-1">Faster way to create web pages</h5>
              <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
            </div>
          </div>
          <div className="carousel-item h-100" style={{backgroundImage: 'url("./assets/img/carousel-3.jpg")', backgroundSize: 'cover'}}>
            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i className="ni ni-trophy text-dark opacity-10" />
              </div>
              <h5 className="text-white mb-1">Share with us your design tips!</h5>
              <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  )
}

export default Carousel