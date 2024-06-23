// src/components/DateList.js
import React from 'react';
import CopyButton from './CopyButton';

const DateList = ({ dates }) => {
    const formatDatesForCopy = () => {
        return dates.map(item => `${item.date}`).join('\n');
    };

    return (
        <div>
            <CopyButton textToCopy={formatDatesForCopy()} />
            <ul>
                {dates.map((item, index) => (
                    <li key={index}>
                        {item.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DateList;
