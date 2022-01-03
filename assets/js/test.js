// var content = document.getElementById("content");
// var button = document.getElementById("showMore");

// button.onclick = function () {
//   if (content.className == "open") {
//     //shrink the box
//     content.className = "";
//     button.innerHTML = "Show More";
//   } else {
//     //expand the box
//     content.className = "open";
//     button.innerHTML = "Show Less";
//   }
// };

var newButton = document.getElementById("details");
var showtoggle = document.getElementById("hiddenPara");
newButton.onclick = function () {
  if (showtoggle.className == "open") {
    showtoggle.className = "close";
  } else {
    showtoggle.className = "open";
  }
};
