
// simple random number function, will get a random number between 1 and 255 for the rgb value
function randomNum() {
  return Math.floor(Math.random() * 255);
};

//creates a blank array to store rgb values in
  let num = [];


function newClick() {
  for (let i = 1; i<=3; i++) { // will only loop 3 times
    if (num.length > 2) { // makes sure there is only 3 numbers in the array at all times
     num.shift();
   }
    num.push(randomNum()); //each time of the for loop a random number gets pushed to "num array"
};
//changes background color to the 3 random numbers in array
document.querySelector('body').style.backgroundColor = `rgb(${num[0]}, ${num[1]}, ${num[2]})`;

// displays current rgb value on the app
document.getElementById('color').innerHTML = `The current color is rgb(${num[0]}, ${num[1]}, ${num[2]})`
}

//starts function when page loads
newClick();

function underHood() {
  document.getElementById('underHood').style.display = "block";
}
