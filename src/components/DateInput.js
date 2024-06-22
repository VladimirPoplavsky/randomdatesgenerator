// A form component for user input (start date and number of rows).
import React, { useState } from 'react';

const DateInput = ({ onGenerate }) => {
    const [date, setDate] = useState('');
    const [rows, setRows] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const [year, month, day] = date.split('-');
        const startDate = new Date(year, month - 1, day);
        onGenerate(startDate, rows);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Start Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>
                Number of Rows:
                <input type="number" value={rows} onChange={(e) => setRows(Number(e.target.value))} />
            </label>
            <button type="submit">Generate Dates</button>
        </form>
    );
};

export default DateInput;
