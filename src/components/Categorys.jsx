import { useEffect, useState } from "react";
import Category from "./Category";


const Categorys = () => {
    const [categorys,setCategorys]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=> setCategorys(data))
    },[])
    return (
        <div className="mt-10 grid grid-cols-4 gap-5">
            {
                categorys.map(category => <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categorys;