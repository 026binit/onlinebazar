import React from 'react';
import './Homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import SearchBoxSection from '../../components/SearchBoxSection/SearchBoxSection';
import AdsSection from '../../components/AdsSection/AdsSection';

export default class Homepage extends React.Component{
    render(){
        return(
            <section className="container">
               <div className="background-image-section">
                  <h1 className="background-image-section--h1--lagrge">Largest classifieds in the country</h1>
                  <p className="background-image--section--p-small">You can buy sell anything you want</p>
                  <SearchBoxSection />
               </div>
               <AdsSection />
            </section>
        )
    }
}