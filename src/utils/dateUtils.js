export const generateRandomDates = (startDate, endDate) => {
    const dates = [];

    // Function to format date as dd/mm/yyyy
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).padStart(4, '0');
        return `${day}/${month}/${year}`;
    };

    // Function to shuffle an array
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    // Iterate through each day between start and end date
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        // Skip Fridays (5) and Saturdays (6)
        if (currentDate.getDay() !== 5 && currentDate.getDay() !== 6) {
            // Generate a random number of dates (between 3 and 7) for this day
            const numberOfDates = Math.floor(Math.random() * 4) + 3;
            for (let i = 0; i < numberOfDates; i++) {
                const randomDate = new Date(currentDate);
                dates.push({ date: formatDate(randomDate) });
            }
        }
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Shuffle the dates array to ensure the list is not sorted
    shuffleArray(dates);

    return dates;
};
