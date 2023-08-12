import React from 'react';
import { useState } from 'react';
import './style.css'

function FirstSection({  isDarkMode }) {


    return (
        <>
            <section  className={`py-5 text-center first-sec ${isDarkMode ? 'dark' : ''}`}>
                <div>
                    <img src="/images/Kedak Icon SVG 1 (1).png" alt="Logo" className="img-fluid mb-4" />

                    <h1 className="max-width-h1 mb-3">Make Every Connection Count</h1>

                    <p className="text mb-4">Unlock your networking potential with OVOU's all-in-one digital business card solution.</p>

                    <button className='btn mx-2'>
                        <i class="fa-brands fa-apple mr-2"></i>&nbsp; Download on Apple store
                    </button>
                    <button className='btn mx-2 car'>
                        <i class="fa-sharp fa-regular fa-id-card mr-2 "></i>&nbsp; Order a card
                    </button>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src="/images/Group 178 (1).png" alt="Image" className="img-fluid foto1" />
                </div>
               
            </section>
        </>
    )
}

export default FirstSection
