import React from 'react';
import CategoryListing from '../CategoryListing/CategoryListing';
import './AdsSection.css';
import './FeaturedAds/FeaturedAds';
import FeaturedAds from './FeaturedAds/FeaturedAds';

export default class AdsSection extends React.Component{
    render(){
        return(
            <div  className="ad-section--container">
                <CategoryListing />
                <FeaturedAds />
            </div>
        )
    }
}