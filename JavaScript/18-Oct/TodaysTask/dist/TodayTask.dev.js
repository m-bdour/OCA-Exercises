"use strict";

function submitCover() {
  var JobTitle = document.getElementById('JobTitle').value;
  var Company = document.getElementById('Company').value;
  var duties = document.getElementById('duties').value;
  var jobFocus = document.getElementById('jobFocus').value;
  var degree = document.getElementById('degree').value;
  var major = document.getElementById('major').value;
  var experience = document.getElementById('experience').value;
  var industry = document.getElementById('industry').value;
  var Cover1 = 'As a ' + JobTitle + ' for ' + Company + ', I was responsible for ' + duties + '. My main task was to ' + jobFocus + '.';
  var Cover2 = 'My ' + degree + ' in ' + major + ' along with ' + experience + 'in ' + industry + " has prepared me to be a successful Technical Shelter Assistant. Once you have reviewed my qualifications, I'd love to tell you more about my background.";
  document.getElementById('CoverLetter').innerText = Cover1 + Cover2;
}