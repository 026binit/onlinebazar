import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBoxSection.css';

export default class SearchBoxSection extends React.Component{
    render(){
        return(
            <div className="searchbox-section">
               <div>
                  <input type="text" name="name" placeholder="What are you lookig for ?" />
               </div>
               <div>
                 <input type="text" name="name" placeholder="Location"  />
                 <FontAwesomeIcon icon="map-marker-alt" />
               </div>
               <div>
                   <div>
                        <select>
                            <option value="volvo">All categories</option>
                            <option value="saab">Real state</option>
                            <option value="opel">Books & Magazines</option>
                            <option value="audi">Furnitures</option>
                            <option value="sgdg">Electronics</option>
                            <option value="dgds">Cars & Vehicles</option>
                            <option value="others">Others</option>
                        </select>
                   </div>
                   <FontAwesomeIcon icon="angle-down" />
               </div>
               <div>
                   <button>Search</button>
               </div>
            </div>
        )
    }
}