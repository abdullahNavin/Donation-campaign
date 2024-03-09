import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setItems } from "../components/LStorage";

const Ditails = () => {
    const datas = useLoaderData()
    const { id } = useParams()


    const category = datas.find(category => category.id === id)
    const { description, img, title,price } = category

    const handleDonationBtn =(id)=>{
        setItems(id)
        
    }

    return (
        <div>
            <div className="relative">
                <img className="w-full h-[85vh] rounded" src={img} alt="" />
                <div className="Dbg text-white py-6 absolute w-full bottom-0 left-0">
                    <button onClick={()=>handleDonationBtn(id)} className="ml-6 rounded text-xl font-semibold bg-[#ff444a] hover:bg-[#fc353b] py-2 px-5">Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-2xl font-bold my-6">{title}</h1>
            <h1 className="text-gray-500 mb-10">{description}</h1>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Ditails;