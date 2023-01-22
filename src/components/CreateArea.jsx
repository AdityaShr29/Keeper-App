import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Axios from 'axios';
// import { Keyframe } from 'react-native-reanimated';
  
function CreateArea(props) {
  
  useEffect(() => {
    fetch("http://localhost:3000/", { crossdomain: true })
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
    setInputText({
      title: "",
      content: ""
    });
  }

  function handleAreaClick(){
    // var row = 1;

    setExpanded(true);

    
    // return row = 1;
  }
  
  // console.log(expanded);
  //   const row3 = 3;
  //   const row1 = 1;
  

  // var noRows = handleAreaClick;

  // const url = "http://localhost:3001/";

  function handleFormSubmit(e) {
    
    e.preventDefault();

    const {title, content} = inputContent;

    const res = fetch("/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    })

    // Axios.post(url, {
    //   title: inputContent.title,
    //   body: inputContent.content
    // })

    // .then(res => {
    //   console.log(res.inputContent);
    // })
    
    // fetch('http://localhost:3000/', {
    //   method: 'POST',
    //   // We convert the React state to JSON and send it as the POST body
    //   body: JSON.stringify(this.name)
    // }).then(function(response) {
    //   // console.log(response)
    //   return response.json();
    // });
    
  }

  return (
    <div>

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
