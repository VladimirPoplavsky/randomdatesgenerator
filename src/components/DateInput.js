import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateInput = ({ onGenerateDates }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [rowCount, setRowCount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate && rowCount) {
            onGenerateDates(startDate, endDate, parseInt(rowCount));
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
            <label>
                Number of Rows:
                <input
                    type="number"
                    value={rowCount}
                    onChange={(e) => setRowCount(e.target.value)}
                    min="1"
                    placeholder="Enter number of rows"
                />
            </label>
            <button type="submit">Generate Dates</button>
        </form>
    );
};

export default DateInput;
