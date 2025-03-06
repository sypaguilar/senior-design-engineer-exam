import React from "react";
import "./App.css";
import SportsCar from "SportsCar";

function Banner() {
    return (
        <div className={`w-screen banner bg-right-top bg-cover h-full px-5 content-center text-white`}>
            <div className={`portrait-banner`}>
                <p className={`flex font-grotesqueBold banner-title`}>Ready to<br />own a car?</p>
                <div className={`flex justify-between`}>
                    <div className='content-center'>
                        <p className={`banner-subtitle`} >Your Ride, Your Savings</p>
                    </div>
                    <div className="content-end place-items-end">
                        <SportsCar color={'white'} />
                    </div>
                </div>
            </div>
            <div className={`square-banner`}>
                <p className={`flex font-grotesqueBold banner-title`}>Ready to<br />own a car?</p>
                <div className="banner-sportscar content-end place-items-end">
                    <SportsCar color={'white'} />
                </div>
                <p className={`content-center banner-subtitle py-5`}>Your Ride, Your Savings</p>
            </div>
        </div>
    );
}

export default Banner;