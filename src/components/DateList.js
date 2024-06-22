import React from 'react';
import CopyButton from './CopyButton';

const DateList = ({ dates }) => {
    // Function to format dates for copying to Excel
    const formatDatesForCopy = () => {
        return dates.map(item => `${item.date.toLocaleDateString()} - ${item.dayName}`).join('\r\n');
    };

    return (
        <div>
            <CopyButton textToCopy={formatDatesForCopy()} />
            <ul>
                {dates.map((item, index) => (
                    <li key={index}>
                        {item.date.toLocaleDateString()}, {item.dayName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DateList;
