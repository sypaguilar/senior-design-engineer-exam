import React from "react";
import "./App.css";

function Footer() {
    return (
        <div className='w-screen bg-deepTeal footer content-center p-10'>
            <div className="flex justify-between">
                <p className='text-limeGreen text-4xl content-center'>Sophia Ysabelle Aguilar</p>
                <img
                    src="assets/images/sesimi-logo.svg"
                    alt="Sesimi logo"
                    className={`h-16`}
                />
            </div>
            <div className="flex footer-text my-10">
                <p className="text-limeGreen text-xl">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Nec potenti suscipit habitant velit tellus commodo sapien tincidunt. Sem quisque libero turpis nullam montes ac. Nulla a congue primis duis mauris libero. Nisi porta primis blandit sem at magna. Risus facilisi orci tellus aliquam ante platea pulvinar aliquam vel.
                </p>
            </div>
        </div>
    );
}

export default Footer;