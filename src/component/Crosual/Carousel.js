import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

const ImageCarousel = () => {
  return (
    <>
    <div className="carousel-container" >
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
        <div>
          <img src="https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg" alt="Banner 4" />
        </div>
        <div>
          <img src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg" alt="Banner 5" />
        </div>
      </Carousel>
      <div className="ticker-container">
        <div className="ticker-text">
          Nifa Updates:: All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please download the NIFA app from our online classes page to register for a complimentary trial class.
        </div>
      </div>
    </div>
    <div class="container">
  <div>
    <h1>Welcome To National Institute of Fine Arts</h1>
    <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.</p>
    <h6>National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</h6>
    <button>Read More</button>
  </div>
</div>

    </>
  );
};

export default ImageCarousel;
