import React from 'react';
import CopyButton from './CopyButton';

const DateList = ({ dates }) => {
    // Generate text to copy to clipboard
    const textToCopy = dates.map(date => `${date.date}`).join('\n');

    return (
        <div className="date-list">
            <CopyButton text={textToCopy} />
            <ul>
                {dates.map((date, index) => (
                    <li key={index}>{date.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default DateList;
