import { MdOutlineAttachMoney} from 'react-icons/md';
import { BsBook } from 'react-icons/bs';

import PropTypes from 'prop-types'

const Course = ({course}) => {
    const {credit, price, description, title, img} = course || {}; 
    return (
        <>
        <div className='mt-12 w-64 shadow-gray-400 shadow-lg p-4 rounded-xl '>  
            <img className='mb-4 w-64' src={img} alt="" />   
            <h3 className='text-base font-semibold mb-3'>{title}</h3>  
            <p className='text-[#434040ef] text-sm font-normal text-justify mb-4'>{description}</p>
            <div className='flex gap-4'>
            <div className='flex'>
            <MdOutlineAttachMoney></MdOutlineAttachMoney> <p className='text-[#434040ef] text-sm font-normal'> Price: {price} </p>
            </div> 
            <div className='flex gap-3'>
                <BsBook></BsBook> 
                <p className='text-[#434040ef] text-sm font-normal'>Credit : {credit} </p>
            </div>
            </div> 
            <div className='flex justify-center mt-3'>
            <button className='bg-slate-500 w-full rounded-lg h-9 text-white hover:bg-slate-400'> Select </button>
            </div>
        </div>
        </>
    );
};

Course.propTypes = {
    course : PropTypes.object
}

export default Course;