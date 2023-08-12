import React from 'react';
import './Thirdstyle.css'

function ThirdSection({  isDarkMode }) {
    return (
        <>
            <section  className={`text-center third-sec ${isDarkMode ? 'dark' : ''}`}>
                <div className='container'>
                    <div className='row parts'>
                        <div className='col-md-6 part1'>
                            {/* First part content */}
                            <div>
                                <p> <i class="fa-regular fa-lightbulb"></i>&nbsp;The Idea</p>
                                <h2>Lifetime connections on your phone</h2>
                                <button className='btn mx-2'>
                                    <i class="fa-brands fa-apple mr-2"></i>&nbsp; Download on Apple store
                                </button>
                            </div>
                            <div className='note-sec'>
                                <p> <i class="fa-solid fa-pen"></i>&nbsp;Notes</p>
                                <ul>
                                    <li>Instantly share information with someone you're meeting for the first time.</li>
                                    <li>Easily scan cards without stress. Get any card of your own choice.</li>
                                    <li>Contact anyone you have come across through any of their social media handles on their profile.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {/* Second part content */}
                            <div className='d-flex justify-content-end  align-items-center'>
                                <img src='/images/Frame.png' alt='Single Image' className='img-fluid part-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThirdSection
