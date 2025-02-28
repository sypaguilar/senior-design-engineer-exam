import React from "react";
import "./App.css";

function Cards({data}) {
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className={`flex`}>
                <img
                    src={data.imageUrl}
                    alt="Social Post"
                />
            </div>
            <div className="items-center">
                <p className={`flex font-grotesqueBold text-5xl`}>{data.title}</p>
                <div className="flex justify-center items-center">
                    <p className={`flex font-grotesqueRegular text-xl items-center`}>For</p>
                    <p className={`flex font-grotesqueBold text-2xl items-center`}>${data.price}</p>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
            <button className={`bg-limeGreen w-full font-grotesqueRegular`}>Get Started</button>
            </div>
        </div>
    );
}

export default Cards;