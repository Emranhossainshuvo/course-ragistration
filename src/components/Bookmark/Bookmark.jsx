import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark; 
    return (
        <div> 
        <ol>
             <li className='text-[#434040ef] text-sm font-normal mt-1 text-justify'>{title}</li>
        </ol>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;