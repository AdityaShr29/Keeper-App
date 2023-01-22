import React, { useState, useEffect } from "react";
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
// import Axios from 'axios';
// import { Keyframe } from 'react-native-reanimated';
  
function CreateArea(props) {
  
  useEffect(() => {
    fetch("http://localhost:5000/")
  }, []);

  const [inputContent, setInputText] = useState({
    title: "",
    content: ""
  });

  var [expanded, setExpanded] = useState(false);

  function handleInputChange(e) {
    const value = e.target.value;
    setInputText((prevVal) => {
      return {
        title: value,
        content: prevVal.content
      };
    });
  }

  function handleAreaChange(event) {
    const value = event.target.value;
    setInputText((prevVal) => {
      return {
        title: prevVal.title,
        content: value
      };
    });
  }

  function handleClick() {
    props.contentFunc(inputContent);
    // setInputText({
    //   title: "",
    //   content: ""
    // });
  }

  function handleAreaClick(){

    setExpanded(true);

  }

  const test = "";

  function handleFormSubmit(e) {
    
    e.preventDefault();
    
    const {title, content} = inputContent;
    // console.log(title);
    // test = title;
    
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    });
    
  }

  return (
    <div>

    <h1>{test}</h1>

    {/* <h1 
    // datatype={!expanded}
    className="h1">Animating Text
    </h1> */}

      <form onSubmit={handleFormSubmit}>

      {expanded && 
      
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title"
          value={inputContent.title}
          // style={{display: !expanded ? 'none' : 'block'}}
        />
      }
        <textarea className="text-area"
          style={{overflow:'hidden'}}
          // datatype="expanded"
          value={inputContent.content}
          onChange={handleAreaChange}
          onClick={handleAreaClick}
          name="content"
          placeholder="Take a note..."
          rows= {expanded ? 3 : 1}
        />

        <Zoom style={{display: !expanded ? 'none' : 'block'}} in={expanded}>
        {/* <Fab onClick={handleClick}>
          <AddIcon className="form-btn" type="submit" />
        </Fab> */}
        <button onClick={handleClick} className="form-btn" type="submit">+</button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
