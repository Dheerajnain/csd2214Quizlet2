function waitingFn(TimeInMs) {
    const futureTime = Date.now() + TimeInMs;

    while (futureTime > Date.now()) {

    }
}
debugger;
waitingFn(3000);
console.log("function call has just ended");