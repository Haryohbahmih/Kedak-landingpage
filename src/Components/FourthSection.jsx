import React from 'react';
import './Fourthstyle.css'

function FourthSection({ isDarkMode }) {
    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 walkthrough'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p> <i class="fa-solid fa-gear"></i> &nbsp;Walkthrough</p>
                            </div>
                            <h2>How Kedak Works</h2>
                            <p className="steps">Here are steps you can follow to navigate your way through the whole system.</p>
                        </div>
                    </div>

                    <div className={`row card-box ${isDarkMode ? 'dark' : ''}`}>
                        <div className='col-md-6'>
                            <div className="text-items-start card-text">
                                <div className="hoverable-icon">
                                    <i class="fa-regular fa-lightbulb"></i>
                                </div>
                                <p className='num'>&nbsp;1/4</p>
                                <h2>Get a Card</h2>
                                <p className='order'>Order any kind of card you want based on your preference and budget.</p>
                                <button className='btn mx-2 car'>
                                    <i class="fa-sharp fa-regular fa-id-card mr-2 "></i>&nbsp; Order a card
                                </button>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-center align-items-center '>
                                <img src='/images/Frame 1.png' alt='Card' className='img-fluid img1' />
                                <img src='/images/Frame2.png' alt='Card' className='img-fluid img2' />
                            </div>
                        </div>
                    </div>


                    {/* Second Part */}
                    <div className='row '>
                        <div className={`col-md-5 mb-4 mr-md-2 card2-box  ${isDarkMode ? 'dark' : ''}`}>
                            <div className='text-items-start card2-text '>
                                <div className="hoverable-icon">
                                    <i class="fa-regular fa-lightbulb"></i>
                                </div>
                                <p className='num'>&nbsp;2/4</p>
                                <h2>Download App</h2>
                                <p className='order'>Application is free and now available on Apple store.</p>
                                <button className='btn'>
                                    <i className='fa-brands fa-apple'></i> Download on Apple Store
                                </button>
                            </div>
                            <div className='d-flex justify-content-center mt-4 card2-img'>
                                <img src='/images/iPhone 14.png' alt='App' className='img-fluid ' />
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 ml-md-2 ">
                            <div className={`row card3-box ${isDarkMode ? 'dark' : ''}`}>
                                <div className="col-md-6 ">
                                    {/* Content for the first column */}
                                    <div className='text-items-start card3-text'>
                                        <div className="hoverable-icon">
                                            <i class="fa-regular fa-lightbulb"></i>
                                        </div>
                                        <p className='num'>&nbsp;3/4</p>
                                        <h2>Register after installing</h2>
                                        <p className='order'>Fill in every textfield so that when your card is scanned, the reciepient gets all your contact info.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Content for the second column */}
                                    <div className='d-flex justify-content-center'>
                                        <img src='/images/3.png' alt='App' className='img-fluid ' />
                                    </div>
                                </div>
                            </div>
                            <div className={`row card4-box ${isDarkMode ? 'dark' : ''}`}>
                                <div className="col-md-6">
                                    {/* Content for the first column */}
                                    <div className='text-items-start card4-text'>
                                        <div className="hoverable-icon">
                                            <i class="fa-regular fa-lightbulb"></i>
                                        </div>
                                        <p className='num'>&nbsp;4/4</p>
                                        <h2>Update your details</h2>
                                        <p className='order'>Application is free and now available on Apple store..</p>
                                        <li>Instantly share information with someone you're meeting for the first time.</li>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Content for the second column */}
                                    <div className='d-flex justify-content-center'>
                                        <img src='/images/4.png' alt='App' className='img-fluid ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourthSection;
