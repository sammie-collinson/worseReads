import React, {useState} from 'react';
import Details from './Details';

const Book = (props) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    const toggleClass = () => {
        if(displayDetails===false){
            setDisplayDetails(true)
        } if(displayDetails===true){
            setDisplayDetails(false)
        }
    }

    return(
        <div key={props.key} className="card">
            <h3>{props.title}</h3>
            <button onClick={toggleClass}>View Details</button>
            <div className={displayDetails===false? "details" : ""}>
            <Details subjects={props.subjects} referenceLink={props.referenceLink} darkMode ={props.darkMode} />
            </div>
            <img src={props.coverArt} alt="book cover"></img>
        </div>        
    )
};

export default Book;
