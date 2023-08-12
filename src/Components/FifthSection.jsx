import React from 'react';
import './Fifthstyle.css';

function FifthSection({ isDarkMode }) {
    return (
        <>
            <section className='py-5 mt-5 text-center '>
                <div className="container fifth-sec">
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p> <i class="fa-solid fa-dollar-sign"></i>&nbsp;Card Payments</p>
                            </div>
                            <h2>Card Pricing</h2>
                            <p className="steps">Here are steps you can follow to navigate your way through the whole system.</p>
                        </div>
                    </div>

                    {/* Three equal boxes */}
                    <div className='row boxes'>
                        <div className='col-md-4'>
                            <div className={`box ${isDarkMode ? 'dark' : ''}`}>
                                <div className="bronze">
                                    <h4 style={{ color: "#FF6E1A" }}>Bronze Card</h4>
                                    <h3>$80</h3>
                                    <button>
                                        Order a card
                                    </button>
                                </div>
                                <div className="list">
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='box green-border'>
                                <div className="bronze">
                                    <h4 style={{ color: "#ADB5BD" }}>Silver Card</h4>
                                    <h3>$120</h3>
                                    <button className='btnn' >
                                        Order a card
                                    </button>
                                </div>
                                <div className="list">
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='box'>
                                <div className="bronze">
                                    <h4 style={{ color: "#FFD91A" }}>Gold Card</h4>
                                    <h3>$160</h3>
                                    <button>
                                        Order a card
                                    </button>
                                </div>
                                <div className="list">
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-check"></i>&nbsp;Application is free and now available on Apple store.
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default FifthSection
