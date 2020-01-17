import React from 'react';
import Slider from "react-slick";
import './FeaturedAds.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "yellow" }}
        onClick={onClick}
      />
    );
  }

export default class FeaturedAds extends React.Component{
    render(){
        let settings = {
            dots: false,
            autoplay:false,
            infinite: true,
            arrows:true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return(
            <div className="featuredads-section">
                <h1>Featured Ads</h1>
                <Slider 
                  {...settings}>
                     <div className="carousel-item-1">
                         <img className="carousel-product--image" src={require('../../../images/img_1.jpg')} />
                     </div>
                     <div className="carousel-item-2">
                      <img className="carousel-product--image" src={require('../../../images/img_2.jpg')} />
                     </div>
                     <div className="carousel-item-3">
                      <img className="carousel-product--image" src={require('../../../images/img_3.jpg')} />
                     </div>
                     <div className="carousel-item-4">
                       <img className="carousel-product--image" src={require('../../../images/img_4.jpg')} />
                     </div>
                     <div className="carousel-item-5">
                       <img className="carousel-product--image" src={require('../../../images/img_1.jpg')} />
                     </div>
                     <div className="carousel-item-6">
                       <img className="carousel-product--image" src={require('../../../images/img_2.jpg')} />
                    </div>
                </Slider>
            </div>
        )
    }
}
