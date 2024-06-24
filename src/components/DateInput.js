import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ onGenerateDates }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            onGenerateDates(startDate, endDate);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Start Date:
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </label>
            <label>
                End Date:
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </label>
            <button type="submit">Generate Dates</button>
        </form>
    );
};

export default DateInput;
