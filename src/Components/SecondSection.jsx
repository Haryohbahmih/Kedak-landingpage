import React from 'react';
import { useState } from 'react';
import './Secondstyle.css'

function SecondSection({ isDarkMode }) {



    return (
        <>
            <section className={`py-5 text-center second-sec ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className='container' >
                    <div className='row justify-content-center align-items-center note'>
                        <div className='col-md-6 mb-4 mb-md-0 note'>
                            <p className="mb-4">
                                <q>
                                    Sana is the first system I've seen that can truly be an end-to-end learning platform for companies.
                                </q>
                            </p>
                            <div className='d-flex align-items-center profile'>
                                <div className='col-md-6 pr-md-0'>
                                    <img
                                        src='/images/Ellipse 1.png'
                                        alt='Profile'
                                        className='img-fluid rounded-circle profile-image '
                                    />
                                </div>
                                <p className=' pl-md-2'>
                                    Vladimir Roshuv
                                    <br />
                                    C.E.O
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SecondSection
