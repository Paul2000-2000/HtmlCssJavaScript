const hourEl= document.getElementById("ho");
const minuteEl = document.getElementById("mi");
const secondsEl= document.getElementById("sc")
const znEl = document.getElementById("zn");


function updateClk(){

    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm= "AM";

    if (hour>12)
      {
        hour= hour-12
        ampm="PM"
      }

      hourEl.innerText=hour;
      minuteEl.innerText=minute;
      secondsEl.innerHTML=seconds;
      znEl.innerText=ampm;
      setTimeout(() =>{
        updateClk()
      },1000)
}

updateClk()