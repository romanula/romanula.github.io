var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello world!';
var a = 'roman';
var b = 7;
var c;
c = a+b;
myHeading.textContent = c;

/*
Всё, что находится тут комментарий.
*/
// комент
//document.querySelector('body').onclick = function test () {
//    alert('НЕ щолкай!!!');
//}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-256.jpg') {
      myImage.setAttribute ('src','images/google chrome manjaro.png');
    } else {
      myImage.setAttribute ('src','images/firefox-256.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
