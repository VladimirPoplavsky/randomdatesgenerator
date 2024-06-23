// function generates array of random dates.
export const generateRandomDates = (startDate, rowCount) => {
    const dates = [];
    const dateMap = new Map();
    const currentDate = new Date();
    // const nameOfDay = {
    //     0: "ראשון",
    //     1: "שני",
    //     2: "שלישי",
    //     3: "רביעי",
    //     4: "חמישי",
    //     5: "שישי",
    //     6: "שבת"
    // };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).padStart(4, '0');
        return `${day}/${month}/${year}`;
    };

    while (dates.length < rowCount) {
        const randomTime = startDate.getTime() + Math.random() * (currentDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTime);

        // Skip Fridays (5) and Saturdays (6)
        if (randomDate.getDay() === 5 || randomDate.getDay() === 6) continue;

        const dateString = randomDate.toDateString();

        // Ensure no more than 6 of the same date
        if (!dateMap.has(dateString)) {
            dateMap.set(dateString, 0);
        }
        if (dateMap.get(dateString) < 6) {
            dateMap.set(dateString, dateMap.get(dateString) + 1);
            // const dayName = nameOfDay[randomDate.getDay()];
            dates.push({ date: formatDate(randomDate) });
        }
    }

    return dates;
};
