import React from "react";
import "./App.css";

function Card({ data }) {
    return data.map(car => {
        return <div className="text-center">
            <img
                src={car.imageUrl}
                alt={car.title}
                className="pb-5 w-full"
            />
            <p className={`font-grotesqueBold text-4xl xl:text-6xl 2xl:text-8xl p-1`}>{car.title}</p>
            <div className="pt-3 pb-8">
                <span className={`text-xl xl:text-2xl 2xl:text-4xl p-1 align-text-top`}>For</span>
                <span className={`font-grotesqueBold text-4xl 2xl:text-7xl p-1 align-text-top`}>${car.price}</span>
            </div>
            <button className={`bg-limeGreen w-full font-grotesqueBold p-3 text-3xl xl:text-4xl`}>Get Started</button>
        </div>
    });
}

export default Card;