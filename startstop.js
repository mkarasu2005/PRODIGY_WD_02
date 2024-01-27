const playbutton=document.getElementsByClassName("play")[0];
const lapbutton=document.getElementsByClassName("lap")[0];
const resetbutton=document.getElementsByClassName("reset")[0];
const minute=document.getElementsByClassName("min")[0];
const second=document.getElementsByClassName("sec")[0];
const centisecond=document.getElementsByClassName("msec")[0];
const laps=document.getElementsByClassName("laps")[0];
const clearbutton=document.getElementsByClassName("lapclear")[0];
const bg=document.getElementsByClassName("outercircle")[0];




let isPlay=false;
let mincounter=0;
let min;
let seccounter=0;
let sec;
let centicounter=0;
let centisec;
let isreset=false;
let lapitem=0;

const tooglebutton=()=>{
    lapbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
}
const play=()=>{

    if(!isPlay && !isreset){
        playbutton.innerHTML=`Pause`;
        bg.classList.add("animationbg");
        min=setInterval(() => {
            minute.innerHTML=`${++mincounter} :`;
        }, 60*1000);
        sec=setInterval(() => {
            if(second===60){
                seccounter=0;
            }
            second.innerHTML=` &nbsp;${++seccounter} :`;
        }, 1000);
        centisec=setInterval(() => {
            if(centicounter===100){
                centicounter=0;
            }
            centisecond.innerHTML=` &nbsp;${++centicounter}`;
        }, 10);
        isPlay=true;
        isreset=true;
    }
    else{
        playbutton.innerHTML=`Play`;
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isPlay=false;
        isreset=false;
        bg.classList.remove("animationbg");

    }
    tooglebutton();
}
const reset=()=>{
    isreset=true;
    play();

    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    second.innerHTML='&nbsp;0 :';
    centisecond.innerHTML='&nbsp;0';
    minute.innerHTML='0 :';
}
const lap=()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timestamp=document.createElement("span");
    li.setAttribute("class", "lapitem");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time");

    
    
    number.innerText=`Lap ${++lapitem}:`;
    
    timestamp.innerHTML=`${mincounter} : ${seccounter} : ${centicounter}`
    li.append(number, timestamp);
    laps.append(li);
    clearbutton.classList.remove("hidden");
}

    const clearall=()=>{
        laps.innerHTML='';
        laps.append(clearbutton);
        clearbutton.classList.add("hidden");

    }
playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
lapbutton.addEventListener("click", lap);
clearbutton.addEventListener("click", clearall);
