import { FaBookmark } from "react-icons/fa6";
import './Blog.css'
import PropTypes from 'prop-types';

const Blog = ({blog, handleBookmark, handleReadingTime}) => {

    const { cover, id, title , author, author_img, posted_date, reading_time, hashtags} = blog

    console.log(reading_time)

    console.log(blog)
    return (
        <div className='space-y-4'>

            <img className='mt-8 rounded-xl' src={cover} alt="" />

            <div className='flex justify-between items-center'>
            <div className='flex author_img items-center'>
                <img src={author_img} alt="" />
                <div className='ml-3'>
                    <h1 className='font-bold'>{author}</h1>
                    <p>{posted_date}</p>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <p>{reading_time} mins read</p>

                <button onClick={()=> handleBookmark(blog)} className="text-2xl"> <FaBookmark></FaBookmark></button>
               
            </div>
            </div>

            <h1 className="text-3xl font-bold mb-4"> {title}</h1>

           <div>
           {
                hashtags.map((hash, idx) => <span key={idx} className='ml-2'> #{hash}</span>)
            }
           </div>

           <div>
            <button onClick={()=>handleReadingTime(reading_time, id)} className="underline text-blue-600" >Mark As Read</button>
           </div>
            
        </div>
    );
};

Blog.propTypes = {

    blog : PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime : PropTypes.func.isRequired
    
};

export default Blog;