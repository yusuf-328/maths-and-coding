alert(" Welcome to eduTech!");
const pi = 3.148;
let radius;
let area;
userValue = document.getElementById('users-input');
submit = document.getElementById('submit');
showAnswer = document.getElementById('display-value');

submit.onclick = function () {
    radius = userValue.value;
    radius = Number(radius);
    area = pi*radius*radius;
    showAnswer.textContent = `The radius of ${radius} = ${area}cm`;
    console.log = area;
alert("successful!");
}

const pie= 3.148;
let r;
let circumference;
userInput = document.getElementById('users-number');
display = document.getElementById('Submitt');
answer = document.getElementById('display');

display.onclick= function () {
    r = userInput.value;
    r = Number(r);
    circumference = 2*pie*r;
    answer.textContent = `The Circumference of ${r} = ${circumference}cm`;
    console.log = circumference;
    alert('succesful');
}

let r2;
let diameter;
user = document.getElementById ("user-number");
click = document.getElementById ("Submit");
show = document.getElementById("Display");

click.onclick = function () {
    let r2 = user.value;
    r2 =Number(r2)
    diameter = 2*r2;
    show.textContent =`The Diameter of ${r2} = ${diameter}cm`;

}