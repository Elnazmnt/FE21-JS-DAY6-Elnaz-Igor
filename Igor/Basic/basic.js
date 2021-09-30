// var sandwiches = `{ "sandwich": "hamburger",
// "calories": "260" }`;

// var fries = `{ "fries_size": "Large French Fries",
// "calories": "570" }`;

let message = document.getElementById('result');


var S = JSON.parse(sandwiches);
var F = JSON.parse(fries)

console.log(S)
console.log(F)


message.innerHTML = `My favorite sandwich is a <em>${S.sandwich}</em> which has approximately ${S.calories} calories, along with it I enjoy eating <em>${F.fries_size}</em> which have about ${F.calories} calories.`