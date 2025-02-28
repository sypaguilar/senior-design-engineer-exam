import React from "react";
import "./App.css";

function Footer() {
    return (
        <div className='w-screen bg-deepTeal h-1/4 items-center'>
            <div className="grid grid-cols-2 place-content-between gap-4">
                <div>
                    <p className='text-limeGreen text-4xl'>Sophia Ysabelle Aguilar</p>
                </div>
                <div className="text-right">
                    <img
                        src="assets/images/sesimi-logo.svg"
                        alt="Sesimi logo"
                        className={`w-40 text-right`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;