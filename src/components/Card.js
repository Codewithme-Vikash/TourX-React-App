import { useState } from "react";


function Card({ id, name, info, image, price, setData }) {


    const [readMore, setReadMore] = useState(false);

    const modifyInfo = readMore ? info : `${info.substring(0, 100)}...`;

    function removeHandler() {

        setData(prevData => prevData.filter(city => city.id !== id));

    };

    return (
        <div className="card w-[350px]  p-4 flex flex-col items-center justify-center h-max rounded-[10px]
             shadow-lg transition-all duration-150 shadow-black hover:shadow-2xl">
            <div className="w-[320px]">
                <img src={image} alt="city-image" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="my-3 mx-[5px]">
            <p className="text-[#1faa59] text-lg font-bold">Rs. {price} </p>
            <p className="text-2xl font-semibold"> {name} </p>
            </div>
            <p> {modifyInfo}
                {
                    readMore ?
                        (
                            <span className="text-[#12b0e8] cursor-pointer" onClick={() => setReadMore(!readMore)}>show less</span>
                        ) :
                        (
                            <span className="text-[#12b0e8] cursor-pointer" onClick={() => setReadMore(!readMore)}>Read More</span>
                        )
                }
            </p>
            <button onClick={removeHandler} 
                className="py-2 px-20 mt-4 cursor-pointer rounded-xl bg-[#b4161b21] border border-solid 
                    border-[#b4161b] text-lg font-bold hover:bg-red-500 hover:text-white transition-all
                    duration-200">Not Interested</button>
        </div>
    );
};

export default Card;