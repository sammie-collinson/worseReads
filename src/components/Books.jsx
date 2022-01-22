import React, { useEffect } from 'react';
import axios from 'axios';


const Books = (props) => {
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
                    // console.log(coverID)
                    workArr[i].coverArt = `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`
                    console.log(workArr)

                }
            }
            getWorks()
            
        } getBooks()
    },[isbnList])
    
    return(
        <div>
            {
                props.books.map((book) => (
                    <h3 key={book.ISBN}>{book.ISBN}</h3>
                ))
            }
        </div>
    )
};

export default Books;
