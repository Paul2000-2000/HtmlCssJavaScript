const rockElement = document.getElementById("rock");
const paperElement = document.getElementById("paper");
const scissorsElement = document.getElementById("scissors");
const aftedivElement = document.getElementsByClassName('.afterclick');
const h2Element = document.getElementById("h2aft");
const img1Element = document.getElementById("imgaft1");
const img2Element = document.getElementById("imgaft2");
const pElement = document.getElementById("ptext");
const resetElement = document.getElementById("reset");

let items = [rockElement , paperElement , scissorsElement]

let PcRandomPick = items[Math.floor(Math.random() * items.length)];

let wins =0;
let losses =0;
let ties =0;

 function score() {
      if (wins == 0 && losses == 0 && ties ==0)
        aftedivElement.style.display = "none";
       
 }


scissorsElement.addEventListener("click", function(){
    if (PcRandomPick == scissorsElement)
        {
            h2Element.innerText = "Tie.";
            img1Element.src = "Assests/scissors-emoji.png";
            img2Element.src = "Assests/scissors-emoji.png";
            ties++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("egal");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
    if (PcRandomPick == paperElement)
        {
            h2Element.innerText = "Win.";
            img1Element.src = "Assests/scissors-emoji.png";
            img2Element.src = "Assests/paper-emoji.png";
            wins++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("win");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
        
    if (PcRandomPick == rockElement)
        {
            h2Element.innerText = "Lose.";
            img1Element.src = "Assests/scissors-emoji.png";
            img2Element.src = "Assests/rock-emoji.png";
            losses++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
            console.log("lose");
        }
})

rockElement.addEventListener("click", function(){
    if (PcRandomPick == scissorsElement)
        {
            h2Element.innerText = "Win.";
            img1Element.src = "Assests/rock-emoji.png";
            img2Element.src = "Assests/scissors-emoji.png";
            wins++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("win");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
    if (PcRandomPick == paperElement)
        {
            h2Element.innerText = "Lose.";
            img1Element.src = "Assests/rock-emoji.png";
            img2Element.src = "Assests/paper-emoji.png";
            losses++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("lose");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
        
    if (PcRandomPick == rockElement)
        {
            h2Element.innerText = "Tie.";
            img1Element.src = "Assests/rock-emoji.png";
            img2Element.src = "Assests/rock-emoji.png";
            ties++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
            console.log("tie");
        }
})

paperElement.addEventListener("click", function(){
    if (PcRandomPick == scissorsElement)
        {
            h2Element.innerText = "Lose.";
            img1Element.src = "Assests/paper-emoji.png";
            img2Element.src = "Assests/scissors-emoji.png";
            losses++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("lose");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
    if (PcRandomPick == paperElement)
        {
            h2Element.innerText = "Tie.";
            img1Element.src = "Assests/paper-emoji.png";
            img2Element.src = "Assests/paper-emoji.png";
            ties++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            console.log("tie");
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
        }
    else
        
    if (PcRandomPick == rockElement)
        {
            h2Element.innerText = "Win.";
            img1Element.src = "Assests/paper-emoji.png";
            img2Element.src = "Assests/rock-emoji.png";
            wins++;
            ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
            PcRandomPick = items[Math.floor(Math.random() * items.length)];
            console.log("win");
        }
})

    resetElement.addEventListener("click", function(){
        wins =0;
        ties =0;
        losses=0;
        ptext.innerText = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
    })