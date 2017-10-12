var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');

var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');

div1.onclick = function() {
  if (text1.style.display === "none") {
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
  } else {
    text1.style.display = "none";
  }
};

div2.onclick = function() {
  if (text2.style.display === "none") {
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "none";
  } else {
    text2.style.display = "none";
  }
};

div3.onclick = function() {
  if (text3.style.display === "none") {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
    text4.style.display = "none";
    text5.style.display = "none";
  } else {
    text3.style.display = "none";
  }
};

div4.onclick = function() {
  if (text4.style.display === "none") {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "block";
    text5.style.display = "none";
  } else {
    text4.style.display = "none";
  }
};

div5.onclick = function() {
  if (text5.style.display === "none") {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    text5.style.display = "block";
  } else {
    text5.style.display = "none";
  }
};
