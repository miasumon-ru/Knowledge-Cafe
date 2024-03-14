
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {


    return (
        <div className="md:w-1/3 ml-4 ">

            <div className='bg-[#6047EC1A] p-5 mb-4 mt-16'>
                <h1 className='text-2xl text-[#6047EC]'> Spent Time On Read : {readingTime}</h1>
            </div>


            <div className='bg-gray-300 p-5'>
                <h3 className="text-3xl mb-8"> Bookmarks : {bookmarks.length}  </h3>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
                }
            </div>

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
};

export default Bookmarks;