import React from 'react';
import './Faq.css'

function Faq() {
    return (
        <>
            <section className=' mt-5 '>
                <div className="faqq-container">
                    <div className='row text-center'>
                        <div className='col-md-12'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <p> <i class="fa-solid fa-circle-question"></i> &nbsp;Questions</p>
                            </div>
                            <h2>FAQ</h2>
                        </div>
                    </div>

                    <div className="faq-container">
                        <div className="faq-item">
                            <div className='faq-text'>
                                <p>This is the first question?</p>
                            </div>
                            <div className='faq-icon'>
                                <i class="fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className='faq-text'>
                                <p>This is the first question?</p>
                            </div>
                            <div className='faq-icon'>
                                <i class="fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        <div className="faq-item">
                            <div className='faq-text'>
                                <p>This is the first question?</p>
                            </div>
                            <div className='faq-icon'>
                                <i class="fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        <button>Reach us on WhatsApp</button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Faq

