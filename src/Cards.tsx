import React from "react";
import "./App.css";
import Card from "Card";

function Cards() {
    const carData = [{
        color: '#544AE5',
        title: 'Sports Car Purple',
        price: '32,000'
    },
    {
        color: '#544AE5',
        title: 'Sports Car Purple',
        price: '32,000'
    },
    {
        color: '#7AF1FF',
        title: 'Sports Car Blue',
        price: '32,000'
    },
    {
        color: '#7AF1FF',
        title: 'Sports Car Blue',
        price: '32,000'
    }
    ];

    return (
        <div className="p-20 w-screen cards content-center overflow-auto">
            <div className="grid grid-cols-2 gap-20 justify-around">
                <Card data={carData} className={`text-center`} />
            </div>
        </div>
    );
}

export default Cards;