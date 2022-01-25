import React from 'react';


const Details = (props) => {
    return(
        <div>
            <ul className="details" key={props.key}>
            {
                props.subjects.map((subject) => (
                    <li key={props.key}>
                        {subject}
                    </li>
                ))
            }
            </ul> 
            <button><a href={props.referenceLink}>Tell Me More!</a></button>      
        </div>
    )
};

export default Details;
