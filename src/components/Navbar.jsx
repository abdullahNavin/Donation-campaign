import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-3">
            <div>
                <img src="https://i.postimg.cc/3xv27Rb6/Logo.png" alt="" />
            </div>
            <div className="">
                <ul className="flex gap-7 text-xl font-medium text-blue-950">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/Donation'}>Donation</NavLink></li>
                    <li><NavLink to={'/Statistics'}>Statistics</NavLink></li>
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;