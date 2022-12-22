import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='py-20 my-20'
            style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover'
            }}
        >
            <div>
                <h3 className='text-center text-primary font-bold text-xl'>Contact Us</h3>
                <h1 className='text-center text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className='flex justify-center mt-10'>
                <div className=''>
                    <form>
                        <input type="text" placeholder="Email Eddress" className="input input-bordered max-w-xs block" />
                        <input type="text" placeholder="Subject" className="input input-bordered max-w-xs block mt-5" />
                        <textarea className="textarea textarea-bordered mt-5 w-full" placeholder="Your message"></textarea>
                    </form>

                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;