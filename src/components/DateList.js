import React from 'react';
import CopyButton from './CopyButton';

const DateList = ({ dates }) => {
    // const textToCopy = dates.map(date => `${date.date} ${date.dayName}`).join('\n');
    const textToCopy = dates.map(date => `${date.date}`).join('\n');

    return (
        <div className="date-list">
            <CopyButton text={textToCopy} />
            <ul>
                {dates.map((date, index) => (
                    // <li key={index}>{date.date} - {date.dayName}</li>
                    <li key={index}>{date.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default DateList;
