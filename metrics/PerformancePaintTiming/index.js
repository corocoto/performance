function showPaintTimings() {
    if (window.performance) {
        let performance = window.performance;
        let performanceEntries = performance.getEntriesByType('paint');
        performanceEntries.forEach(performanceEntry => {
            console.log(`The time to ${performanceEntry.name} was ${performanceEntry.startTime} ms.`);
        });
    } else {
        console.log('Performance timing isn\'t supported.');
    }
}

showPaintTimings();