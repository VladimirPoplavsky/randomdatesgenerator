import React, { useState } from 'react';
import DateInput from './components/DateInput';
import DateList from './components/DateList';
import { generateRandomDates } from './utils/dateUtils';
import './App.css';

const App = () => {
    const [dates, setDates] = useState([]);

    const handleGenerateDates = (startDate, endDate) => {
        const generatedDates = generateRandomDates(new Date(startDate), new Date(endDate));
        setDates(generatedDates);
    };

    return (
        <div className="App">
            <h1>Random Date Generator</h1>
            <p>Generates not sorted list of X dates from "Start Date" to "End Date"</p>
            <p>where is X between 4 and 6. There is No Friday or Saturday </p>
            <DateInput onGenerateDates={handleGenerateDates}/>
            <DateList dates={dates}/>
        </div>
    );
};

export default App;
