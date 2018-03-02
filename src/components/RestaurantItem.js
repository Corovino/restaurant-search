import React from 'react';
import {Link} from 'react-router-dom';

const RestaurantItem = (props) => {
 const {name, streetAddress} = props.restaurant

  return (
    <div className="rest-tile">
      <div>
        <h2>{name}</h2>
        <p>{streetAddress}</p>
        <Link to={`restaurants/${props.id}`}>Click here for menu </Link>  
      </div>
    </div>
    )
}

export default RestaurantItem;