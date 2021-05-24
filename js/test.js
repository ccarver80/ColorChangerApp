const button = document.getElementById('button');


function randomNum() {
  return Math.floor(Math.random() * 255);
};

  let num = [];

function newClick() {
  for (let i = 1; i<=3; i++) {
    if (num.length > 2) {
     num.shift();
   }
    num.push(randomNum());
};
document.querySelector('body').style.backgroundColor = `rgb(${num[0]}, ${num[1]}, ${num[2]})`;

document.getElementById('color').innerHTML = `The current color is rgb(${num[0]}, ${num[1]}, ${num[2]})`
}

newClick();
