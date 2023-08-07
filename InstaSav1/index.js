const chooseimageEl = document.getElementById("chooseimage");
const imageselEl = document.getElementById("imageee");
const saveimageEl = document.getElementById("saveimage");
const labelstEl = document.getElementById("prop");
const labeldrEl = document.getElementById("val");
const rangeEl = document.getElementById("inpran");
const brightnessEl = document.getElementById("brightness");
const saturationEl = document.getElementById("saturation");
const inversionEl = document.getElementById("inversion");
const grayscaleEl = document.getElementById("grayscale");

chooseimageEl.addEventListener("click", function(){
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function(event) {
      const selectedImage = event.target.files[0];
      if (selectedImage) {
        const reader = new FileReader();
        reader.onload = function() {
          imageselEl.style.backgroundImage = `url('${reader.result}')`;
          imageselEl.style.backgroundSize  = 'cover';
          imageselEl.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(selectedImage);
      }
    };
  
    input.click();
});

saveimageEl.addEventListener("click", function(){
    const backgroundImageURL = imageselEl.style.backgroundImage;
    const imageURL = backgroundImageURL.slice(backgroundImageURL.indexOf("(") + 1, backgroundImageURL.lastIndexOf(")")).replace(/['"]/g, "");

    const output = document.createElement("a");
    output.href = imageURL ;
    output.download = "image.jpg";
    output.click();
})

rangeEl.addEventListener("input", function() {
    labeldrEl.innerText = rangeEl.value;
  });

  brightnessEl.addEventListener("click", function() {
    labelstEl.innerText = "Brightness";
    imageselEl.style.filter = `brightness(${rangeEl.value / 100})`;
  });
saturationEl.addEventListener("click", function(){
    labelstEl.innerText="Saturation";

})

inversionEl.addEventListener("click", function(){
    labelstEl.innerText="Inversion";

})

grayscaleEl.addEventListener("click", function(){
    labelstEl.innerText="Grayscale";

})



