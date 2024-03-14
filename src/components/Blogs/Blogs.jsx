

import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])


    return (
        <div className='md:w-2/3'>

            <h4 className='text-2xl font-medium'> Blogs : {blogs.length} </h4>

            {
                blogs.map(blog => <Blog handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}> </Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
    
};

export default Blogs;