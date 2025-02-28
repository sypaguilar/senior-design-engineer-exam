import React from "react";
import "./App.css";

function Card({ data }) {
    return data.map((car) => {
        return <div className="..">
            <img
                src={car.imageUrl}
                alt={car.title}
                className="pb-5"
            />
            <p className={`font-grotesqueBold text-5xl text-center p-1`}>{car.title}</p>
            <div className="text-center pt-3 pb-8">
                <span className={`font-grotesqueRegular text-md p-1 align-text-top`}>For</span>
                <span className={`font-grotesqueBold text-4xl p-1 align-text-top`}>${car.price}</span>
            </div>
            <button className={`bg-limeGreen w-full font-grotesqueBold p-3 text-3xl`}>Get Started</button>
        </div>
    });
}

export default Card;