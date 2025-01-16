import React from "react";
import Book from "./Book";

function Library(props){
   return(
      <div>
         <Book name="첨만남은 어려워" num0fPage={300} />
         <Book name="계획되로 되질않" num0fPage={400} />
         <Book name="여러워어어" num0fPage={500} />

      </div>
   )
}


export default Library;