import React from 'react';
import "./Header.css" ;
const Header = () => {
    return (
    <div className='header'>
    <a href="/">Home</a>
    <a href="/comments" target="_blank">Comments</a>
    <a href="/countries" target="_blank">Countries</a>
    <a href="/posts" target="_blank">Posts</a>
    </div>
    );
};
//rsc
export default Header;