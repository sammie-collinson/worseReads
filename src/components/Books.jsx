import React from 'react';
import Book from './Book';

const Books = (props) => {
    return(
        <div className="grid">
            {
                props.bookState.map((book) => (
                    <div key={book.key} > 
                        <Book title={book.title} coverArt={book.coverArt} subjects={book.subjects} referenceLink={book.referenceLink}  />     
                    </div>

                ))
            }
        </div>
    )
};

export default Books;
