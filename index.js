const hr=document.getElementById("hour");
const min=document.getElementById("min");
const sec=document.getElementById("sec");

function showTime(){
    let date= new Date();
    //geting the current hour minute and second
    let hh=date.getHours();
    let m=date.getMinutes();
    let se=date.getSeconds();

    //
    let hRotation=30*hh +m/2;
    let mRotation=6*m;
    let sRotation=6*se;

    hr.style.transform =`rotate(calc(${hRotation}deg))`;
    min.style.transform =`rotate(calc(${mRotation}deg))`;
    sec.style.transform =`rotate(calc(${sRotation}deg))`;

}
setInterval(showTime,1000);
