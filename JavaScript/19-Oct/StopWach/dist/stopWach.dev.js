"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Stopwatch = function Stopwatch() {
  _classCallCheck(this, Stopwatch);

  var startTime,
      endTime,
      running,
      duration = 0;

  this.start = function () {
    if (running) throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error('Stopwatch has already stopped.');
    running = false;
    endTime = new Date(); // duration = endTime - startTime;

    var seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperties(this, 'duration', {
    get: function get() {
      return duration;
    }
  });
};