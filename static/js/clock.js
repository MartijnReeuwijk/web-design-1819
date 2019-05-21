let hover = Array.from(document.getElementsByClassName("numberInput"));
hover.forEach(elem => {
  elem.addEventListener("focus", focus);
});

function focus() {
  let labels = Array.from(document.getElementsByClassName("numberInput"));
  labels.forEach(elem => {
    elem.parentNode.classList.remove("backgroundGradiant");
    elem.parentNode.classList.remove("shadow");
  });
  this.parentNode.classList.add("backgroundGradiant");
  this.parentNode.classList.add("shadow");
}
// document.getElementById("day")
// document.getElementById("day").onkeypress = function(e) {
//   var key = e.charCode || e.keyCode || 0;
//   console.log(key);
//   if (key == 13 || key == 32) {
//     var checkedValue = document.querySelector(".numberInput:checked").value;
//     placeValue(checkedValue);
//   } else if (
//     key == 8 ||
//     key == 98 ||
//     key == 120 ||
//     key == 110 ||
//     key == 92 ||
//     key == 191
//   ) {
//     removeValue();
//   }
// };

document.querySelector("body").onkeypress = function(e) {
  if (event.key == "i") {
    e.preventDefault();

    document.getElementById("dayPick").focus();
  }
  if (event.key == "o") {
    e.preventDefault();

    document.getElementById("weekPick").focus();
  }
  if (event.key == "p") {
    e.preventDefault();

    document.getElementById("timeComWeek").focus();
  }
  if (event.key == "[") {
    e.preventDefault();
    document.getElementsByClassName('saveHolder')[0].classList.add("slideIn")
    saveTimer();
    deleteweek();
    document.getElementById("deleteWeek").focus();
    document.getElementById("deleteWeek").click();
  }
  if (event.key == "]") {
    e.preventDefault();
    addweek()
    document.getElementById("addWeek").focus();
    document.getElementById("addWeek").click();

  }
  if (event.key == "j") {
    e.preventDefault();
    document.querySelector("#maandWeekPick").focus();
  }
  if (event.key == "k") {
    e.preventDefault();
    document.querySelector("#maanddayPick").focus();
  }
  if (event.key == "l") {
    e.preventDefault();
    document.querySelector("#frequentWeek").focus();
  }
  if (event.key == ";") {
    e.preventDefault();
    document.querySelector("#maandtimeCom").focus();
  }
  if (event.key == "'") {
    e.preventDefault();
    deletemonth()
    document.getElementsByClassName('saveHolder')[0].classList.add("slideIn")
    saveTimer();
    document.querySelector("#maandDelte").focus();
  }
  if (event.code == "Backslash") {
    e.preventDefault();
    addmonth()
    document.getElementsByClassName('saveHolder')[0].classList.add("slideIn")
    saveTimer();
    document.querySelector("#maandAdd").focus();
  }

  // if (event.key == 37 || event.key == 38 ||event.key == 39 ||event.key == 40) {
  //   e.preventDefault();
  //   document.querySelector("#reset").focus();
  // }
  if (event.key) {
    playKey();
  }
};

// document.querySelector("body").onkeypress = function(e) {
//   var key = e.charCode || e.keyCode || 0;
//   if (document.getElementById('date').focus()) {
//     if (key == 39) {
//       document.getElementById('date').nextSibling.hasFocus()
//     }
//     else if (key == 37) {
//       document.getElementById('date').previousSibling.hasFocus()
//     }
//   }
// }

function removeValue() {
  console.log("remove");
  let dateInner = document.getElementById("date");
  let str = dateInner.innerHTML;
  let newStr = str.substring(0, str.length - 1);
  dateInner.innerHTML = newStr;
}

function deleteDate() {
  let dateInner = document.getElementById("date");
  dateInner.innerHTML = "";
}

function placeValue(value) {
  let dateInner = document.getElementById("date");
  dateInner.innerHTML += value;
  if (dateInner.innerHTML.length >= 6) {
    valueTodate();
  }
}

function valueTodate() {
  let dateInner = document.getElementById("date");
  let data = dateInner.innerHTML;

  var st = data;
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var dt = new Date(st.replace(pattern, "$3-$2-$1"));
  // date = data.substr(0, 2) + "-" + data.substr(2, 4) + "-" + data.substr(6);
  dateInner.innerHTML = dt;
}

function getDayDate() {
  let dayPick = document.getElementById("dayPick");
  let monthPick = document.getElementById("monthPick");
  let weekPick = document.getElementById("weekPick");

  let day = Number(dayPick.options[dayPick.selectedIndex].value);
  let month = Number(monthPick.options[monthPick.selectedIndex].value);
  let n = Number(weekPick.options[weekPick.selectedIndex].value);
  console.log(month, day, n);
  getNthDay(month, day, n);
}

function getNthDay(month, day, n) {
  console.log(month, day, n);
  const dateInner = document.getElementById("date");
  const now = new Date();
  console.log(now);
  let d = new Date(now.getFullYear(), month, 1, 0, 0, 0);
  console.log("first day of the month", d);
  d.setDate(d.getDate() + (n - 1) * 7 + day - d.getDay());
  console.log("final date", d);
  dateInner.innerHTML = d;
}

function saveTimer(){
  var audio = new Audio('hell.mp3');
  audio.play();
  setTimeout(function () {
    document.getElementsByClassName('saveHolder')[0].classList.remove("slideIn")
    audio.pause();
    audio.currentTime = 0;
  }, 5000);
}

function playKey() {
  let audio = new Audio('key.mp3');
  audio.play();
}

function changeTimeWeek() {
  let timeSelector = document.querySelector('div.weekHolder > h2 > span:nth-child(2)');
  let timeValue = document.getElementById("timeComWeek").value;
  let weekSelector = document.querySelector('div.weekHolder > h2 > span:nth-child(1)');
  let weekValue = document.getElementById("weekPick").value;
  weekSelector.textContent = weekValue;
  timeSelector.textContent = timeValue;
  console.log(timeValue);
}
function changeTimeMonth() {
  let eerst = document.querySelector('div.maandHolder > h2');
  let maandWeekPick = document.getElementById("maandWeekPick").value;
  let maanddayPick = document.getElementById("maanddayPick").value;
  let frequentWeek = document.getElementById("frequentWeek").value;
  let maandtimeCom = document.getElementById("maandtimeCom").value;

  eerst.textContent = maandWeekPick +" "+ maanddayPick +" "+ frequentWeek + " om " + maandtimeCom;
  console.log(timeValue);
}
function addweek() {
  document.getElementsByClassName('weekHolder')[0].classList.remove("fadeOut");
}
function deleteweek() {
  document.getElementsByClassName('weekHolder')[0].classList.add("fadeOut");
}
function deletemonth() {
  document.getElementsByClassName('maandHolder')[0].classList.add("fadeOut");
}
function addmonth() {
  document.getElementsByClassName('maandHolder')[0].classList.remove("fadeOut");
}

document.getElementById("timeComWeek").addEventListener("change", changeTimeWeek);
document.getElementById("weekPick").addEventListener("change", changeTimeWeek);
// document.getElementById("timeComMonth").addEventListener("change", changeTime);

document.getElementById("maandWeekPick").addEventListener("change", changeTimeMonth);
document.getElementById("maanddayPick").addEventListener("change", changeTimeMonth);
document.getElementById("frequentWeek").addEventListener("change", changeTimeMonth);
document.getElementById("maandtimeCom").addEventListener("change", changeTimeMonth);


// document.getElementById("reset").addEventListener("click", deleteDate);
