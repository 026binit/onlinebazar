import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <div className="carousel-container">
                <Slider 
                  {...settings}>
                     <div className="carousel-item">
                         <img className="carousel-product--image" src={require('../../../images/img_1.jpg')} />
                         <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                         </div>
                     </div>
                     <div className="carousel-item">
                      <img className="carousel-product--image" src={require('../../../images/img_2.jpg')} />
                      <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                      </div>
                     </div>
                     <div className="carousel-item">
                      <img className="carousel-product--image" src={require('../../../images/img_3.jpg')} />
                      <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                      </div>
                     </div>
                     <div className="carousel-item">
                       <img className="carousel-product--image" src={require('../../../images/img_4.jpg')} />
                       <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                       </div>
                     </div>
                     <div className="carousel-item">
                       <img className="carousel-product--image" src={require('../../../images/img_1.jpg')} />
                       <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                       </div>
                     </div>
                     <div className="carousel-item">
                       <img className="carousel-product--image" src={require('../../../images/img_2.jpg')} />
                       <div className="carousel-product-desc">
                            <div className="carousel-product-desc--category--icon">
                               <span>Real State</span>
                               <FontAwesomeIcon className="carousel-product-desc--category--icon--heart" icon="heart" />
                            </div>
                            <div className="carousel-product-desc--product">
                              <p className="carousel-product-desc--product--name">Red Luxury Car</p> 
                              <p className="carousel-product-desc--product-location">Don St. Brooklyn, New York</p> 
                            </div>
                      </div>
                    </div>
                  </Slider>
                </div>
            </div>
        )
    }
}
