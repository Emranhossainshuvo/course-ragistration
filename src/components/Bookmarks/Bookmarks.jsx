import PropTyes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="lg:w-72 bg-slate-200 p-3 rounded-lg mt-16">
            <p className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining </p>  
            <hr className="border-b-1 border-gray-300 my-4" />          
            <h5 className="text-xl font-bold mb-3">Course Name:</h5> 
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }           
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTyes.object
}

export default Bookmarks;