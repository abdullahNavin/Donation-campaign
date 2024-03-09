import { Link } from "react-router-dom";

const SDonation = ({ item }) => {
    const { id, img, title, Ccategory, category_bg, card_bg, text_button_bg, price } = item

    return (
        <div style={{ background: card_bg }} className="flex">
            <div className="mr-6">
                <img className="h-[200px] w-[220px]" src={img} alt="" />
            </div>
            <div>
                <button className="py-1 px-3 text-white mt-4" style={{ background: text_button_bg }}>{Ccategory}</button>
                <h1 className="text-2xl font-bold my-2">{title}</h1>
                <h3 className="text-xl font-semibold" style={{ color: category_bg }}>${price}</h3>
                <Link to={`/Ditails/${id}`}><button style={{ background: category_bg }} className="py-2 px-4 mt-4 text-white">View Ditails</button></Link>
            </div>
        </div>
    );
};

export default SDonation;