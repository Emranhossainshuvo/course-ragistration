import PropTyes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, remaining, totalCost }) => {
    console.log(totalCost)
    return (
        <div className="lg:w-80 bg-slate-200 p-3 rounded-lg mt-16">
            <p className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remaining} </p>
            <hr className="border-b-1 border-gray-300 my-4" />
            <h5 className="text-xl font-bold mb-3">Course Name:</h5>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            <p className='text-[#434040ef] p-2 border-t-2 border-gray-300  text-md font-normal text-justify mt-10'>Total Credit Hour: {totalCost} </p>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTyes.array
}

export default Bookmarks;