import React from "react";
import "./App.css";
import Card from "Card";

function Cards() {
    const carData = [{
        imageUrl: 'assets/images/Sports Car Purple.svg',
        title: 'Sports Car Purple',
        price: '32,000'
    },
    {
        imageUrl: 'assets/images/Sports Car Light Sky Blue.svg',
        title: 'Sports Car Blue',
        price: '32,000'
    },
];

    return (
        <div className="p-20 w-screen h-2/3">
            <div className="grid grid-cols-2 gap-20">
                <Card data={carData} />
            </div>
        </div>
    );
}

export default Cards;