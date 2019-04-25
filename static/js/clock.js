let hover = Array.from(document.getElementsByClassName("numberInput"));
hover.forEach(elem => {
  // elem.addEventListener("mouseover", move);
  // elem.addEventListener("mouseout", remove);
  // elem.addEventListener("mouseover", addGradi);
  // elem.addEventListener("mouseout", removeGradi);

  // elem.addEventListener("mouseover", addHover);
  // elem.addEventListener("mouseout", removeHover);

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
    document.getElementById("submitDate").focus();
  }
  if (event.key == "/") {
    console.log("Reeee");
    e.preventDefault();
    document.querySelector("#day label:first-child").focus();
  }
  if (event.key == ".") {
    e.preventDefault();
    document.querySelector("#reset").focus();
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

document.getElementById("submitDate").addEventListener("click", getDayDate);
document.getElementById("reset").addEventListener("click", deleteDate);

// now i need to stop the js from triggering for like 4 sec
// code loopt niet lekker maar oke is een demo
// eye tracking
function addHover() {
  // // console.log(this.childNodes[3]);
  // let hover = Array.from(document.getElementsByClassName("number"));
  // hover.forEach(elem => {
  //   elem.childNodes[3].childNodes[1].classList.remove("backgroundGradiant");
  // });
  // this.childNodes[3].childNodes[1].classList.add("backgroundGradiant");
  // var that = this;
  //
  // setTimeout(function () {
  //   // console.log(that.childNodes[3].childNodes[1]);
  //   that.childNodes[1].checked = true;
  // }, 2000);
}

function removeHover() {
  //   let all = document.getElementsByClassName('number')
  // all.forEach(elem => {
  //   elem.childNodes[3].childNodes[1].classList.remove("backgroundGradiant");
  //
  // });
}

// function checkArrowKeys(e){
//     var arrs= ['left', 'up', 'right', 'down'],
//     key= window.event? event.keyCode: e.keyCode;
//     if(key && key>36 && key<41){
//       console.log(this);
//       console.log("test");
//     };
// }
// document.onkeydown= checkArrowKeys;

// //
// let hover = Array.from(document.getElementsByClassName('number'));
// hover.forEach(elem => {
//   // elem.addEventListener("mouseover", move);
//   // elem.addEventListener("mouseout", remove);
//   elem.addEventListener("mouseover", addGradi);
//   elem.addEventListener("mouseout", removeGradi);
// });
// // moet de correcte add hebben
// function addGradi() {
//   // first removeall the things
//   let hover = Array.from(document.getElementsByClassName('number'));
//   hover.forEach(elem => {
//   elem.childNodes[1].childNodes[1].classList.remove("focused");
//   });
//
//     this.childNodes[1].childNodes[1].classList.add("backgroundGradiant");
//     let that = this.childNodes[1].childNodes[1]
//     console.log(that);
//     setTimeout(function () {
//       test(that)
//     }, 2000);
//     function test(that) {
//
//       that.classList.add("focused");
//     }
//
// }
//
// function removeGradi() {
//   this.childNodes[1].childNodes[1].classList.remove("backgroundGradiant");
//
// }
//
//
//
//
//
// //
// // // This is still kinda shitty but works for now
// // function remove() {
// //   this.childNodes[1].childNodes[1].classList.remove("backgroundGradiant");
// //   this.childNodes[1].childNodes[1].style.width = 0 + '%';
// // }
// //
// // function move() {
// //   this.childNodes[1].childNodes[1].classList.add("backgroundGradiant");
// //   this.childNodes[1].childNodes[1].style.width = 0 + '%';
// //   let element = this.childNodes[1].childNodes[1]
// //   let width = 1;
// //   let id = setInterval(frame, 100);
// //
// //   function frame() {
// //     if (width >= 100 && width !== undefined && this.childNodes[1].childNodes[1].contains('backgroundGradiant')) {
// //       clearInterval(id);
// //     } else {
// //       width++;
// //       element.style.width = width + '%';
// //       // span.innerHTML = width * 1  + '%';
// //     }
// //   }
// // }
