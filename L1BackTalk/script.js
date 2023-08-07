const checkyElements = document.querySelectorAll('.checky p.isc');
const divs = document.querySelectorAll('.c1, .c2, .c3, .c4, .c5, .c6, .c7');
const contentElements = document.getElementById("content");
const colors = ["#ff608c", "white", "#00FFFF", "orange", "yellow", "blue", "red"];
const bugElements = document.getElementById("buyg");

checkyElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    
    hideAllDivs();
    divs[index].style.display = 'flex';
    divs[index].style.flexDirection = 'column';
    divs[index].style.alignItems='center';
    divs[index].style.justifyContent='center';
    divs[index].style.height='100%' ;
    contentElements.style.backgroundColor = colors[index];
  });
});

function hideAllDivs() {
  divs.forEach((div) => {
    div.style.display = 'none';
  });
}


bugElements.addEventListener("click" , function() {
   window.location.href = "butgpress.html";
})