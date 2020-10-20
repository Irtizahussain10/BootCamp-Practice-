import React, { useEffect, useState } from 'react';
import './styles.css';

function BookTable() {

  let [Books, addBooks] = useState([]);

  useEffect(() => {
    fetch("/api/Books")
      .then(response => response.json())
      .then(response => addBooks(response))
  })

  function addBook() {
    const title = prompt("Enter the title");
    const author = prompt("Enter the name of author");

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, author })
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h1>The list of available books is</h1>
      <table>
        <thead>
          <tr>
            <th>Books</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((key, index) => {
            return (
              <tr>
                <td>{key.title}</td>
                <td>{key.author}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={() => { addBook() }}><b>Add Book</b></button>
    </div>
  );
}

export default BookTable;