

// import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

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
                blogs.map(blog => <Blog key={blog.id} blog={blog}> </Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;