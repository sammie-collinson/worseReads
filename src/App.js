import './styles/App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Books from './components/Books';
import books from './books';



const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [bookState, setBookState] = useState([])
  const API = `https://openlibrary.org`
  const ISBNList = books.map((book) => (
    `${API}/isbn/${book.ISBN}.json`
    ))

    const toggleClass = () => {
      if(darkMode===false){
          setDarkMode(true)
      } if(darkMode===true){
          setDarkMode(false)
      }
  }
    
    useEffect(() => {
      async function getISBNInfo() {
        let ISBNInfo =[];
        for(let i=0; i<ISBNList.length; i++) {
          const res = await axios.get(`${ISBNList[i]}`)
          ISBNInfo.push(res.data)
        }
        const works = ISBNInfo.map((work) => {
          let json = work.works[0].key
          return `${API}${json}.json`
        })
        async function getWorks() {
              let workArr = [];
              while(workArr.length < works.length){
                for(let i=0; i<works.length; i++) {
                  const response = await axios.get(`${works[i]}`)
                  workArr.push(response.data)
                  let coverID = workArr[i].covers[0]
                  workArr[i].coverArt = `https://covers.openlibrary.org/b/id/${coverID}-L.jpg`
                  let referenceLink = workArr[i].key
                  workArr[i].referenceLink = `https://openlibrary.org${referenceLink}`
                }
                
                  setBookState(workArr)
      
            }
          }
        getWorks()
    } getISBNInfo()
  },[books])

  return (
    <div className="App">
      <button className={darkMode===false? "lightmode": "darkmode"} onClick={toggleClass}>{darkMode===false? 'Dark Mode': 'Light Mode'}</button>
      <h1>Sammie's Sanderson Outpost</h1>
      <Books bookState={bookState} darkMode={darkMode} />
    </div>
  );
}

export default App;
