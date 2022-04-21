import React from 'react';
import Book from './Book';

const Books = (props) => {

const {darkMode, bookState} = props

    return(
        <div className="grid">
            {
                bookState.map((book) => (
                    <div key={book.key} > 
                        <Book title={book.title} coverArt={book.coverArt} subjects={book.subjects} referenceLink={book.referenceLink} darkMode={darkMode}  />     
                    </div>

                ))
            }
        </div>
    )
};

export default Books;
