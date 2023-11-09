function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  //time countDown
 
// load event listeners
loadEventListeners();
function loadEventListeners() {
//DOMContentLoaded event fires when the initial HTML document has been completely loaded
	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
};
//The value of your input time
var timeTo = document.getElementById('time-to').value,
    date,
//Use new Date() to get a Date for the current time or Date
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = "";
// calculate date, hour, minute and second
function calcTime(dates) {

//ui variables
  clearInterval(startTimer);
   if(typeof(dates) == 'undefined'){
     date = new Date(newYear).getTime();
   }
   else {
     date = new Date(dates).getTime();
    }
  function updateTimer(date){
//Current time has been collected from the device
    var now = new Date().getTime();
//The current time has been subtracted from your input time
    var distance = date - now;
   // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // select element
   //innerHTML allows Javascript code to manipulate a website being displayed
    //I stored the time in different var.
     //Now you have to show them in the box
    document.querySelector('.clock-day').innerHTML = days;
    document.querySelector('.clock-hours').innerHTML = hours;
    document.querySelector('.clock-minutes').innerHTML = minutes;
    document.querySelector('.clock-seconds').innerHTML = seconds;
  //When the current time will be more than your input time
   if(now >= date){
     clearInterval(startTimer);
     document.querySelector('.clock-day').innerHTML = 'D';
     document.querySelector('.clock-hours').innerHTML = 'O';
     document.querySelector('.clock-minutes').innerHTML = 'N';
     document.querySelector('.clock-seconds').innerHTML = 'E';
  }
 }
 startTimer = setInterval(function() { updateTimer(date); }, 1000);
}// load event listeners
loadEventListeners();
function loadEventListeners() {
//DOMContentLoaded event fires when the initial HTML document has been completely loaded
	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
};
//The value of your input time
var timeTo = document.getElementById('time-to').value,
    date,
//Use new Date() to get a Date for the current time or Date
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = "";
// calculate date, hour, minute and second
function calcTime(dates) {

//ui variables
  clearInterval(startTimer);
   if(typeof(dates) == 'undefined'){
     date = new Date(newYear).getTime();
   }
   else {
     date = new Date(dates).getTime();
    }
  function updateTimer(date){
//Current time has been collected from the device
    var now = new Date().getTime();
//The current time has been subtracted from your input time
    var distance = date - now;
   // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // select element
   //innerHTML allows Javascript code to manipulate a website being displayed
    //I stored the time in different var.
     //Now you have to show them in the box
    document.querySelector('.clock-day').innerHTML = days;
    document.querySelector('.clock-hours').innerHTML = hours;
    document.querySelector('.clock-minutes').innerHTML = minutes;
    document.querySelector('.clock-seconds').innerHTML = seconds;
  //When the current time will be more than your input time
   if(now >= date){
     clearInterval(startTimer);
     document.querySelector('.clock-day').innerHTML = 'D';
     document.querySelector('.clock-hours').innerHTML = 'O';
     document.querySelector('.clock-minutes').innerHTML = 'N';
     document.querySelector('.clock-seconds').innerHTML = 'E';
  }
 }
 startTimer = setInterval(function() { updateTimer(date); }, 1000);
}// load event listeners
loadEventListeners();
function loadEventListeners() {
//DOMContentLoaded event fires when the initial HTML document has been completely loaded
	document.addEventListener('OMContentLoaded', function() { calcTime(); });
};
//The value of your input time
var timeTo = document.getElementById('time-to').value,
    date,
//Use new Date() to get a Date for the current time or Date
    now = new Date(),
    newYear = new Date('.1.2020').getTime(),
    startTimer = "";
// calculate date, hour, minute and second
function calcTime(dates) {

//ui variables
  clearInterval(startTimer);
   if(typeof(dates) == 'undefined'){
     date = new Date(newYear).getTime();
   }
   else {
     date = new Date(dates).getTime();
    }
  function updateTimer(date){
//Current time has been collected from the device
    var now = new Date().getTime();
//The current time has been subtracted from your input time
    var distance = date - now;
   // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   // select element
   //innerHTML allows Javascript code to manipulate a website being displayed
    //I stored the time in different var.
     //Now you have to show them in the box
    document.querySelector('.clock-day').innerHTML = days;
    document.querySelector('.clock-hours').innerHTML = hours;
    document.querySelector('.clock-minutes').innerHTML = minutes;
    document.querySelector('.clock-seconds').innerHTML = seconds;
  //When the current time will be more than your input time
   if(now >= date){
     clearInterval(startTimer);
     document.querySelector('.clock-day').innerHTML = 'D';
     document.querySelector('.clock-hours').innerHTML = 'O';
     document.querySelector('.clock-minutes').innerHTML = 'N';
     document.querySelector('.clock-seconds').innerHTML = 'E';
  }
 }
 startTimer = setInterval(function() { updateTimer(date); }, 1000);
}




//End Time Count down



let inputBx= document.querySelector("#inputbx")
let taskList= document.querySelector("#task-list")

let addBtn= document.querySelector("#add")

const searchBar = document.getElementById('search-input');
const icons = document.querySelectorAll('.icon');

function addTask(){
    if(inputBx.value === ''){
        alert("Task should not be empty!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBx.value;
        taskList.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
       
    }
    inputBx.value="";
    saveData();
}


addBtn.addEventListener("click",addTask)

taskList.addEventListener("click",function(e){


    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}
)
//to save data in local storage
function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}

function showtask(){
    taskList.innerHTML=localStorage.getItem("data")
}

showtask();