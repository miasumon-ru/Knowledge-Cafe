

import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark

    
    return (
        <div className="bg-slate-200 p-3 mb-2 ">

            <h3> {title}  </h3>

            
        </div>
    );
};

Bookmark.propTypes = {

    bookmark: PropTypes.object.isRequired
    
};

export default Bookmark;