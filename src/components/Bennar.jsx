

const Bennar = () => {
    return (
        <div>
            <div className="relative top-0 left-0">
                <div>
                    <img className="w-[100%] h-[80vh]" src="https://i.postimg.cc/s2VdMSj8/multiracial-group-doctors-having-sesssion-boardroom-wearing-white-lab-coats-stethoscopes-neck-sittin.jpg" alt="" />
                </div>
                <div className="bg absolute top-0 left-0 h-[100%] w-[100%] flex flex-col gap-5 justify-center items-center ">
                    <h1 className="text-3xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex mt-5 items-center relative">
                        <input id="input" className="px-9 bg-pink-200 text-[#ff444a] outline-none py-3 w-[390px] rounded-full border-none" placeholder="Search here...." type="text" />
                        <div className="w-[95px] rounded-full absolute right-0 top-0 px-[20px] cursor-pointer text-white py-[12px] bg-[#ff444a]">
                            <p>Search</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bennar;