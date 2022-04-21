import React from 'react';


const Details = (props) => {

    const {referenceLink, subjects}=props

    return(
        <div key={referenceLink}>
            <ul>
            {
                subjects.map((subject) => (
                    <li>
                        {subject}
                    </li>
                ))
            }
            </ul> 
            <button><a href={referenceLink}>Tell Me More!</a></button>      
        </div>
    )
};

export default Details;
