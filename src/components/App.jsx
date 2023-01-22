import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { request } from "http";

function App() {

  const [items, setItems] = useState([]);

  function createContent(inputContent) {
    return setItems((prevVal) => {
      return [...prevVal, inputContent];
    });

    // console.log(items);
  }

  function deleteItems(id) {
    setItems((prevVal) => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea contentFunc={createContent} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteFunc={deleteItems}
          />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
