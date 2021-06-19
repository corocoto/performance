function showPaintTimings() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const paintMetrics = performance.getEntriesByType('paint');

            if (paintMetrics && paintMetrics.length > 0) {
                paintMetrics.forEach(paintMetric => {
                    console.log(`The time to ${paintMetric.name} was ${paintMetric.startTime} ms`);
                })
            }
        })
    } else {
        console.log('Performance timing isn\'t supported.');
    }
}

showPaintTimings();