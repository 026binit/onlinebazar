import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBoxSection.css';

export default class SearchBoxSection extends React.Component{
    render(){
        return(
               <form className="searchbox-section">
                    <input type="text" placeholder="Search any thing you want" name="name" />
                    <input type="submit" value="Search" />
                </form>
        )
    }
}