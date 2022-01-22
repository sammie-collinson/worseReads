import './styles/App.css';
import React from 'react';
import Books from './components/Books';
import books from './books';



const App = () => {
  return (
    <div className="App">
      <h2>worseReads</h2>
      <Books books={books} />
    </div>
  );
}

export default App;
