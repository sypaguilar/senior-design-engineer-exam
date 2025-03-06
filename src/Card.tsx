import React from "react";
import "./App.css";
import SportsCar from "SportsCar";

function Card({ data, className }) {
    return data.map((car, index) => {
        return <div className={`${className} ${index % 2 === 0 ? 'hide-aspect' : ''}`}>
            <div className='pb-5'>
                <div className={'py-5'}>
                    <SportsCar color={car.color} width={420} height={145} />
                </div>
                <p className={`font-grotesqueBold text-5xl p-1`}>{car.title}</p>
                <div>
                    <span className={`text-xl p-1 align-text-top`}>For</span>
                    <span className={`font-grotesqueBold text-4xl p-1 align-text-top`}>${car.price}</span>
                </div>
            </div>
            <button className={`bg-limeGreen w-full font-grotesqueBold p-3 text-3xl`}>Get Started</button>
        </div>
    });
}

export default Card;