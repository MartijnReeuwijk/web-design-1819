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
document.getElementById("day").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;
  console.log(key);
  if (key == 13 || key == 32) {
    var checkedValue = document.querySelector(".numberInput:checked").value;
    placeValue(checkedValue);
  } else if (
    key == 8 ||
    key == 98 ||
    key == 120 ||
    key == 110 ||
    key == 92 ||
    key == 191
  ) {
    removeValue();
  }
};

document.querySelector("body").onkeypress = function(e) {
  if (event.key == "p") {
    e.preventDefault();
    document.getElementById("weekPick").focus();
  }
  if (event.key == "[") {
    e.preventDefault();
    document.getElementById("dayPick").focus();
  }
  if (event.key == "]") {
    e.preventDefault();
    document.getElementById("monthPick").focus();
  }
  if (event.key == "=") {
    e.preventDefault();
    document.getElementsByClassName('saveHolder')[0].classList.add("slideIn")
    saveTimer();
    document.getElementById("submitDate").focus();
    document.getElementById("submitDate").click();
  }
  if (event.key == "/") {
    e.preventDefault();
    document.querySelector("#day label:first-child").focus();
  }
  if (event.key == ".") {
    e.preventDefault();
    document.querySelector("#reset").focus();
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
  var audio = new Audio('key.mp3');
  audio.play();
}

document.getElementById("submitDate").addEventListener("click", getDayDate);
document.getElementById("reset").addEventListener("click", deleteDate);
