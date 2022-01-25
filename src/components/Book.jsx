import React from 'react';
import Details from './Details';

const Book = (props) => {
    return(
        <div key={props.key} className="card">
            <h3>{props.title}</h3>
            <button>View Details</button>
            <img src={props.coverArt} alt="book cover"></img>
            <Details subjects={props.subjects} referenceLink={props.referenceLink}/>
        </div>        
    )
};

export default Book;
