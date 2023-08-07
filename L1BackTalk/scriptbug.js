const foorElement = document.getElementById("foor");
const secondtxtElement = document.getElementById("secondtxt");
const plusElement = document.getElementById("sig");
const sigpressElement = document.getElementById("sigpress");
const butbuyElement = document.getElementById("butrigh");
const minusElement = document.getElementById("minus");
const plussElement = document.getElementById("plus");
const counterElement = document.getElementById("counter");
const leftElement = document.getElementById("left");
const rightElement = document.getElementById("right"); 
const imgbookpagElement = document.getElementById("imgbookpag");
const bookpages = ["Assests/img7.png" , "Assests/bookpag1.jpg" , "Assests/bookpag2.jpg" , "Assests/bookpag3.jpg"];

let isVisible = false;

foorElement.addEventListener("click", function() {
  if (isVisible) {
    secondtxtElement.style.display = "none";
    isVisible = false;
    foorElement.innerText = "Ukáž viac";
  } else {
    secondtxtElement.style.display = "block";
    isVisible = true;
    foorElement.innerText = "Ukáž menej";
  }
});



let isVisible2 = false;

plusElement.addEventListener("click", function() {
  if (isVisible2) {
    sigpressElement.style.display = "none";
    isVisible2 = false;
    plusElement.innerText = '+';
  } else {
    sigpressElement.style.display = "block";
    isVisible2 = true;
    plusElement.innerText = '-';
  }
});



butbuyElement.addEventListener("mouseover" , function() {
 
    butbuyElement.innerText = "dada";
    
})

butbuyElement.addEventListener("mouseleave", function() {
  butbuyElement.innerText =  "Pridaf do kosiha";
});



plussElement.addEventListener("click", function(){
  counterElement.innerText++ ;
})

minusElement.addEventListener("click" , function() {
    if (counterElement.innerText >=2)
    counterElement.innerText--;
})

let counterbook = 0;

/*rightElement.addEventListener("click" , function(){
    if (counterbook<3)
      {
        counterbook++;
        imgbookpagElement.src = bookpages[counter] ;
        imgbookpagElement.width =  "500px" ;
        imgbookpagElement.height =  "600px";
        imgbookpagElement.style.objectFit =  "cover";
      }
});


leftElement.addEventListener("click" , function(){
  if (counterbook>0)
    {
      counterbook--;
      imgbookpagElement.src = bookpages[counter] ;
      imgbookpagElement.width =  "500px" ;
      imgbookpagElement.height =  "600px";
      imgbookpagElement.style.objectFit =  "cover";
    }
})*/

rightElement.addEventListener("click", function() {
  if (counterbook < bookpages.length - 1) {
    counterbook++;
  } else {
    counterbook = 0;
  }
  updateImage();
});

leftElement.addEventListener("click", function() {
  if (counterbook > 0) {
    counterbook--;
  } else {
    counterbook = bookpages.length - 1;
  }
  updateImage();
});

function updateImage() {
  imgbookpagElement.src = bookpages[counterbook];
  imgbookpagElement.style.width = "500px";
  imgbookpagElement.style.height = "600px";
  imgbookpagElement.style.objectFit = "cover";
}