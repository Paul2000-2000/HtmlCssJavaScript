const inpEl = document.getElementById("inp1");
const charEl = document.getElementById("characters");
const remainingEl = document.getElementById("remaining");

inpEl.addEventListener("keyup", () => {
    updateC();
});

function updateC() {
    charEl.innerText = inpEl.value.length;
    remainingEl.innerText = inpEl.getAttribute("maxLength") - inpEl.value.length;
}
