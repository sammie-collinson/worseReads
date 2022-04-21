import React, {useState} from 'react';
import Details from './Details';

const Book = (props) => {

    const {title, coverArt, subjects, referenceLink,darkMode}=props
    const [displayDetails, setDisplayDetails] = useState(false)

    const toggleClass = () => {
        if(displayDetails===false){
            setDisplayDetails(true)
        } if(displayDetails===true){
            setDisplayDetails(false)
        }
    }

    return(
        <div key={props.key} className={darkMode===false? "card-light": "card-dark"}>
            <h3>{title}</h3>
            <button onClick={toggleClass}>View Details</button>
            <div className={displayDetails===false? "details" : ""}>
            <Details subjects={subjects} referenceLink={referenceLink} darkMode ={darkMode} />
            </div>
            <img src={coverArt} alt={title}></img>
        </div>        
    )
};

export default Book;
