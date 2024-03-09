import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, img, Ccategory, title, category_bg, card_bg, text_button_bg } = category;


    return (
        <Link to={`/Ditails/${id}`}>
            <div style={{ background: `${card_bg}` }} className={`p-4 rounded-m`}>
                <img className='h-[200px] w-[500px] rounded' src={img} alt="" />

                <h1 style={{ backgroundColor: `${category_bg}` }} className={` my-5 rounded inline-block font-semibold p-2 text-white text-xl`}>{Ccategory}</h1>

                <h2 className='text-xl' style={{ color: `${text_button_bg}` }} >{title}</h2>
                
            </div>
        </Link>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category;