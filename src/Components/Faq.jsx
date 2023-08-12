import React from 'react';
import { useState } from 'react';
import './Faq.css'




function FaqItem({ question }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="faq-item ">
            <div className='faq-text  align-items-center'>
                <p className='quest'>{question}  <div className={`faq-icon ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                <i className={`fa-solid ${isOpen ? 'fa-circle-minus' : 'fa-circle-plus'}`}></i>
            </div></p>
            {isOpen && (
                <div className='faq-answer'>
                    <p>Kedak generates revenue through card sales and app time usuage and this enables us to work on expanding the project of the app and the cards that are being used to collect the contacts infos of other people. </p>
                </div>
            )}
            </div>
        </div>
    );
}

function Faq() {
    return (
        <section className='mt-5 faqq-container'>
            <div className="faq-container">
                <div className='row text-center'>
                    <div className='col-md-12'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <p> <i className="fa-solid fa-circle-question"></i> &nbsp;Questions</p>
                        </div>
                        <h2>FAQ</h2>
                    </div>
                </div>

                <FaqItem question="How does Kedak generates revenue?" />
                <FaqItem question="How does Kedak generates revenue?" />
                <FaqItem question="How does Kedak generates revenue?" />

                <button>Reach us on WhatsApp</button>
            </div>
        </section>
    );
}






export default Faq;


