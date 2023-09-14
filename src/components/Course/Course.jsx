import PropTypes from 'prop-types'

const Course = ({course}) => {
    const {id, credit, price, description, title, img} = course || {}; 
    return (
        <div>            
        </div>
    );
};

Course.propTypes = {
    course : PropTypes.object
}

export default Course;