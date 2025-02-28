import React from "react";
import "./App.css";

function Cards({ data }) {
    return (
        <div className="p-10 w-full">
            <div className="flex flex-col justify-center items-center p-10">
                <div className={`flex`}>
                    <img
                        src={data.imageUrl}
                        alt="Social Post"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <p className={`font-grotesqueBold text-5xl`}>{data.title}</p>
                    <div className="flex flex-row justify-center items-center">
                        <p className={`font-grotesqueRegular text-sm p-1`}>For</p>
                        <p className={`font-grotesqueBold text-2xl p-1`}>${data.price}</p>
                    </div>
                    <button className={`bg-limeGreen w-full font-grotesqueRegular`}>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;