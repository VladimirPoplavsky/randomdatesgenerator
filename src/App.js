// src/App.js
import React, { useState } from 'react';
import DateInput from './components/DateInput';
import DateList from './components/DateList';
import { generateRandomDates } from './utils/dateUtils';
import './App.css';


const App = () => {
    const [dates, setDates] = useState([]);

    const handleGenerateDates = (startDate, rowCount) => {
        const randomDates = generateRandomDates(startDate, rowCount);
        setDates(randomDates);
    };

    return (
        <div className={"App"}>
            <h1>Random Date Generator</h1>
            <DateInput onGenerate={handleGenerateDates} />
            <DateList dates={dates} />
        </div>
    );
};

export default App;
