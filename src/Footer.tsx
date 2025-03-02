import React from "react";
import "./App.css";

function Footer() {
    return (
        <div className='w-screen bg-deepTeal h-1/6 content-center p-10'>
            <div className="grid grid-cols-4 place-content-between gap-4">
                <p className='text-limeGreen col-span-3 text-4xl 2xl:text-8xl content-center'>Sophia Ysabelle Aguilar</p>
                <img
                    src="assets/images/sesimi-logo.svg"
                    alt="Sesimi logo"
                    className={`w-40 2xl:w-full justify-items-end`}
                />
            </div>
            <div className="grid xl:hidden my-10">
                <p className="text-limeGreen text-xl">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Nec potenti suscipit habitant velit tellus commodo sapien tincidunt. Sem quisque libero turpis nullam montes ac. Nulla a congue primis duis mauris libero. Nisi porta primis blandit sem at magna. Risus facilisi orci tellus aliquam ante platea pulvinar aliquam vel.
                </p>
            </div>
        </div>
    );
}

export default Footer;