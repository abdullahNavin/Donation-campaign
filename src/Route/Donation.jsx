
import { useEffect, useState } from "react";
import { getItems } from "../components/LStorage";
import SDonation from "../components/SDonation";

const Donation = () => {
    const [datas, setdatas] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setdatas(data))
    }, [])
    const [ItemsDonate, setitemsDonate] = useState([])
    useEffect(() => {
        const DonateId = getItems()
        const DonateItems = datas.filter(data => DonateId.includes(data.id))
        setitemsDonate(DonateItems)
    }, [datas])

    const [sliceItem, setSliceItem] = useState(false)


    return (
        <div>
            <div className="grid grid-cols-2 gap-5 mt-12">
                {
                    sliceItem ?
                        ItemsDonate.slice(0, 4).map(item => <SDonation key={item.id} item={item}></SDonation>)

                        : ItemsDonate.map(item => <SDonation key={item.id} item={item}></SDonation>)
                }
            </div>
            <div className="mt-5 mb-12 flex justify-center">
                <button
                    className={ItemsDonate.length> 4?`py-2 px-3 rounded bg-red-400 text-white`:`hidden`}
                    onClick={() => setSliceItem(!sliceItem)}
                >{sliceItem ? "See All":"See less"}</button>
            </div>
        </div>
    );
};

export default Donation;