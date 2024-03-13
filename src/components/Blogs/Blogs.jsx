

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])


    return (
        <div>

            <h4 className='text-2xl font-medium'> Blogs Available : {blogs.length} </h4>
            
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;