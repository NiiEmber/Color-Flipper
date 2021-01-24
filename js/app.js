const colors = ["green", "red", "#120078", "#9d0191"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    const RandomNumbers = getRandomNumbers();
    document.body.style.backgroundColor = colors[RandomNumbers];
    color.textContent = colors[RandomNumbers];
});

function getRandomNumbers(){
    return Math.floor(Math.random() * colors.length);
 };