import React from 'react';
import "./Comments.css" ;
import { useEffect , useState } from 'react';
const Comments = () => {
    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json()) 
        .then(data => setCountries(data))
        } , []) ;
        //by by component // take element to routing handle //
        const [comments , setCountries] = useState([]) 
    return (
    
  <>
        <header id='commentsHeaders'>
          <h2> All comments of the users !! </h2>
          </header>    
<div className='makeGrid'>
  {
    comments.map (comment => 
   <Display key={comment.id} name={comment.name} email={comment.email} 
   id={comment.id} postId={comment.postId} body={comment.body} /> 

   )
  }

</div>
        </>
    );
};

function Display(props) {
console.log(props);
    return (
     <div className="myInfo">
        <p> Name : {props.name} </p>
        <p> Email : {props.email} </p>
        <p> Id : {props.id} </p>
        <p> Post id : {props.postId} </p>
        <p> Comment : {props.body} </p>
     </div>
    
    
    )
    }
export default Comments;