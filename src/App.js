import React, { useState } from 'react';
import DateInput from './components/DateInput';
import DateList from './components/DateList';
import { generateRandomDates } from './utils/dateUtils';
import './App.css';

const App = () => {
    const [dates, setDates] = useState([]);

    const handleGenerateDates = (startDate, endDate, rowCount) => {
        const generatedDates = generateRandomDates(new Date(startDate), new Date(endDate), rowCount);
        setDates(generatedDates);
    };

    return (
        <div className="App">
            <h1>Random Date Generator</h1>
            <DateInput onGenerateDates={handleGenerateDates} />
            <DateList dates={dates} />
        </div>
    );
};

export default App;
