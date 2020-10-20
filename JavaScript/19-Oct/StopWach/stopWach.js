//#region 
/*

class StopWatch {
    constructor() {
        constructor(startSW, stopSW, durationSW, resetSW); {
            this.startSW = startSW;
            this.stopSW = stopSW;
            this.durationSW = durationSW;
            this.resetSW = resetSW;
        }
    }

start = function() {
    
}


}
*/
//#endregion

class Stopwatch {
    constructor() {
        let startTime, endTime, running, duration = 0;

        this.start = function () {

            if (running)
                throw new Error('Stopwatch has already started.');

            running = true;

            startTime = new Date();


        };

        this.stop = function () {

            if (!running)
                throw new Error('Stopwatch has already stopped.');

            running = false;

            endTime = new Date();

            // duration = endTime - startTime;
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;

        };

        this.reset = function () {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;

        };

        Object.defineProperties(this, 'duration', {
            get: function () {
                return duration;
            }
        });

    }
}