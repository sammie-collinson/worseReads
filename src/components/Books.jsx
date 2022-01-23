import React from 'react';


const Books = (props) => {
    return(
        <div className="grid">
            {
                props.bookState.map((book) => (
                    <div key={book.key} className="card">
                     <h3>{book.title}</h3>
                     <button>View Details</button>
                     <img src={book.coverArt} alt="book cover"></img>
                    </div>
                ))
            }
        </div>
    )
};

export default Books;
