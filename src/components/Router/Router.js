import React from 'react';
import { Route  , Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Error from '../Error/Error';
import Comments from '../Comments/Comments';
import Countries from '../Countries/Countries';
import Post from '../Comments/Post/Post';
const Router = () => {
    return (
        <>
  <Routes>
    <Route path='/' extract={false} element={<Home/>} />
    <Route path='/comments' extract={false} element={<Comments/>} />
    <Route path='/countries' extract={false} element={<Countries/>} />
    <Route path='/posts' extract={false} element={<Post/>} />
    <Route path='*' extract={false} element={<Error/>} />
  </Routes>
        </>
    );
};

export default Router;