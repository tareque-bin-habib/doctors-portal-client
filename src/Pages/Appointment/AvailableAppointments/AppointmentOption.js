import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center mt-10">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} htmlFor="booking-modal" onClick={() => setTreatment(option)} className="btn btn-primary text-white">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;