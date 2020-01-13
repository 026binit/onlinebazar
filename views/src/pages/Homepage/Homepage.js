import React from 'react';
import './Homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import SearchBoxSection from '../../components/SearchBoxSection/SearchBoxSection';

export default class Homepage extends React.Component{
    render(){
        return(
            <section className="container">
               <div className="background-image-section">
                  <h1 className="background-image-section--h1--lagrge">Largest classifieds in the world</h1>
                  <p className="background-image--section--p-small">You can buy sell anything you want</p>
                  <SearchBoxSection />
               </div>
            </section>
        )
    }
}