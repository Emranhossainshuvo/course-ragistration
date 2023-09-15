import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark; 
    return (
        
             <li className='text-[#434040ef] list-decimal text-sm font-normal mt-1 text-justify'>{title}</li>
        
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;