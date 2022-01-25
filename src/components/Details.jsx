import React from 'react';


const Details = (props) => {
    return(
        <div key={props.key}>
            <ul>
            {
                props.subjects.map((subject) => (
                    <li>
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
