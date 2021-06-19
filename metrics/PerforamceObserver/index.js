if('PerformanceObserver' in window){
    const observerPromise = new Promise(resolve => {
        const observer = new PerformanceObserver(list => resolve(list));

        observer.observe({
            entryTypes: ["paint"]
        });
    }).then(list => {
        list.getEntries().forEach(entry =>
            console.log(`The time to  ${entry.name} was ${entry.startTime} ms`));
    }).catch(error => {
        console.warn(error);
    });
}