import React from "react";
import "./App.css";

function Banner() {
    return (
        <div className={`w-screen h-96 banner bg-top bg-cover content-center grid grid-cols-2 py-10 px-5`}>
            <div>
                <p className={`text-white font-grotesqueBold text-8xl py-3`}>Ready to own a car?</p>
            </div>
            <div className="row-span-2 content-end">
                <img
                    src="assets/images/Sports Car White.svg"
                    alt="Sports Car White" />
            </div>
            <div>
                <p className={`text-white text-5xl  py-3`} >Your Ride, Your Savings</p>
            </div>
        </div>
    );
}

export default Banner;