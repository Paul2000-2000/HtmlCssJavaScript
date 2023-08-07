const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let prod = num1 * num2;

const formEl = document.getElementById("form");

const questEl = document.getElementById("quest");

const inpEl = document.getElementById("inp1");

questEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const puncteEl = document.getElementById("puncte");



let score=JSON.parse(localStorage.getItem("score"));

puncteEl.innerText= ` ${score}`;

formEl.addEventListener("submit", () =>{
    const userAnswer = +inpEl.value;
    if (userAnswer == prod)
        {
            score++;
            console.log(score);
            updateLocalStorage();
        }
        else
        {
        score--;
        console.log(score);
        updateLocalStorage();
    }

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
