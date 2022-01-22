import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Books = (props) => {
    const [bookState, setBookState] = useState('')
    const API = 'https://openlibrary.org'

    const isbnList = props.books.map((book) => (
        `${API}/isbn/${book.ISBN}.json`
    ))


    useEffect(() => {
        async function getBooks () {
                let apiCall =[];
                for(let i=0; i<isbnList.length; i++) {
                const res = await axios.get(`${isbnList[i]}`)
                apiCall.push(res.data)
            }
            const works = apiCall.map((work) => {
                let json = work.works[0].key
               return `${API}${json}.json`
            })
            async function getWorks() {
                let workArr = [];
                for(let i=0; i<works.length; i++) {
                    const response = await axios.get(`${works[i]}`)
                    workArr.push(response.data)
                    let coverID = workArr[i].covers[0]
                    workArr[i].coverArt = `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`
                    setBookState(workArr)

                }
            }
            getWorks()
            
        } getBooks()
    },[isbnList])

    console.log(bookState)
    
    return(
        <div>
            {
                bookState.map((book) => (
                    <h3 key={book.key}>{book.title}</h3>
                ))
            }
        </div>
    )
};

export default Books;
