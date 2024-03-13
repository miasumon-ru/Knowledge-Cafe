
import './Blog.css'
import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const { cover, title , author, author_img, posted_date, reading_time, hashtags} = blog

    console.log(blog)
    return (
        <div className='space-y-4'>

            <img className='mt-8' src={cover} alt="" />

            <div className='flex justify-between items-center'>
            <div className='flex author_img items-center'>
                <img src={author_img} alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>{author}</h1>
                    <p>{posted_date}</p>
                </div>
            </div>

            <div>
                <p>{reading_time} read</p>
            </div>
            </div>

            <h1 className="text-3xl font-bold mb-4"> {title}</h1>

           <div>
           {
                hashtags.map((hash, idx) => <span key={idx} className='ml-2'> #{hash}</span>)
            }
           </div>
            
        </div>
    );
};

Blog.propTypes = {

    blog : PropTypes.object.isRequired
    
};

export default Blog;