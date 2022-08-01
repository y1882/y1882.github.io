let myImage = document.querySelector("img")
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === 'images/Ferret.png') {
        myImage.setAttribute('src','images/Ferret2.png');
      } else {
        myImage.setAttribute('src','images/Ferret.png');
        }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
  let myName=prompt("Please Enter Your Name");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Ferrets are Cute, " + myName;
  }
}
if(!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Ferrets are Cute, " + storedName;
}
myButton.onclick = function(){
  setUserName();
}