import React, { useEffect, useState } from 'react';
import "./Post.css" ;
const Post = () => {
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPost(data)) 
} , [])

const [posts , setPost] = useState([]) ;

    return (
        <div className='gridLayOut'> 
            {
                posts.map(post => <Display body={post.body} title={post.title}  key={post.id}></Display>)
            }
        </div>
    );
};

function Display(props) {
const Style = {
    color : "tomato" ,
}
return (
    <>
    <div className='postDiv'>
    <p> <span style={{"color" : "lime"}}>Body</span> : {props.body} </p>
    <p> <span style={Style}>Title</span> : {props.title} </p>
    </div>
    </>
)
}
export default Post;