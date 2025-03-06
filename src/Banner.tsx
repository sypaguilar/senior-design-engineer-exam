import React from "react";
import "./App.css";
import SportsCar from "SportsCar";

function Banner() {
    const title = <p className={`flex font-grotesqueBold banner-title`}>Ready to<br />own a car?</p>;
    const subtitle = <p className={`banner-subtitle`}>Your Ride, Your Savings</p>;
    const sportscar = <div className="banner-sportscar"><SportsCar color={'white'} /></div>

    return (
        <div className={`w-screen banner bg-right-top bg-cover h-full px-5 content-center text-white`}>
            <div className={`square-banner`}>
                {title}
                {sportscar}
                {subtitle}
            </div>
            <div className={`portrait-banner`}>
                {title}
                <div className={`flex justify-between`}>
                    {subtitle}
                    {sportscar}
                </div>
            </div>
        </div>
    );
}

export default Banner;