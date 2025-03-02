import React from "react";
import "./App.css";

function Banner() {
    return (
        <div className={`w-screen banner bg-top bg-cover content-center h-2/6`}>
            <div className={`grid grid-cols-2 py-10 px-5`}>
                <p className={`text-white font-grotesqueBold text-8xl xl:text-9xl`}>Ready to own a car?</p>
                <div className="row-span-2 content-end">
                    <img
                        src="assets/images/Sports Car White.svg"
                        alt="Sports Car White"
                        className="row-span-2 content-end object-fit w-xl xl:w-full" />
                </div>
                <p className={`text-white text-4xl xl:text-5xl 2xl:text-8xl`} >Your Ride, Your Savings</p>
            </div>
        </div>
    );
}

export default Banner;