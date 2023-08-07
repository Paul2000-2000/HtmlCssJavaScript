const subfinantareEl = document.getElementsByClassName("subfinantare");
const finantareEl = document.getElementById("finantareee");
const bannerEl = document.getElementById("banner2");
const blackclassEl = document.getElementsByClassName("blackrest");

finantareEl.addEventListener("click", function() {
    if (subfinantareEl.length > 0) {
      const subfinantareDiv = subfinantareEl[0];
      const blackclassDiv = blackclassEl[0];
      if (subfinantareDiv.style.display === "none") {
        subfinantareDiv.style.display = "flex"; // Show the subfinantare div
        //blackclassDiv.style.opacity= "0.1";
      } else {
        subfinantareDiv.style.display = "none"; // Hide the subfinantare div
        //blackclassDiv.style.opacity= "1";
      }
    }
  });

 /*function verifyCheck() {
    const butcheckclassEl = document.querySelector('.da');
    const butcheck0El = document.querySelector('#but0'); 
    const butcheck1El = document.querySelector('#but1'); 
    
    function handleCheckboxChange() {
      if (butcheck0El.checked) {
        butcheckclassEl.style.background = 'url(Assests/banner2.avif)'; 
      } 
      else
      if (butcheck1El.checked) {
        butcheckclassEl.style.background = 'url(Assests/banner3.avif'; 
      }  else {
        butcheckclassEl.style.background = ''; // Remove the background image
      }
      
     
    }
    
     

    butcheck0El.addEventListener('change', handleCheckboxChange);
    butcheck1El.addEventListener('change', handleCheckboxChange);
  }
  
  // Call the function to start listening for checkbox changes
  verifyCheck();*/