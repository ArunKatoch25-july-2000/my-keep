import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from "./Note";
import './App.css';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    })
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currdata, index) => {
        return index !== id;
      })
    )
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      <div className="outerDiv">

        {addItem.map((val, index) => {
          return (<Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
          );
        })}

      </div>
      <Footer />
    </>
  );
}

export default App;
