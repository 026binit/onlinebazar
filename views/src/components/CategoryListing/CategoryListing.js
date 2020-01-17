import React from 'react';
import './CategoryListing.css';

export default class CategoryListing extends React.Component{
    render(){
        return(
            <div className="category-listing--section">
               <div className="category-listing--section-item">
                  <span className="flaticon-house category-icon"></span>
                  <span className="category-name">Real Estate</span>
                  <span className="category-number">245</span>
               </div>
               <div className="category-listing--section-item">
                  <span className="flaticon-books category-icon"></span>
                  <span className="category-name">Books & Magazines</span>
                  <span className="category-number">245</span>
               </div>
               <div className="category-listing--section-item">
                  <span className="flaticon-bunk-bed category-icon"></span>
                  <span className="category-name">Furniture</span>
                  <span className="category-number">245</span>
               </div>
               <div className="category-listing--section-item">
                  <span className="flaticon-innovation category-icon"></span>
                  <span className="category-name">Electronics</span>
                  <span className="category-number">245</span>
               </div>
               <div className="category-listing--section-item">
                  <span className="flaticon-car category-icon"></span>
                  <span className="category-name">Cars & Vehicles</span>
                  <span className="category-number">245</span>
               </div>
               <div className="category-listing--section-item">
                  <span className="flaticon-pizza category-icon"></span>
                  <span className="category-name">Other</span>
                  <span className="category-number">245</span>
               </div>
            </div>
        )
    }
}