// const nowTime = new Date().getTime();
const endTime = new Date('2022-01-25 22:45:00').getTime();

const spanD = document.querySelector('span.d')
const spanH = document.querySelector('span.h')
const spanM = document.querySelector('span.m')
const spanS = document.querySelector('span.s')

setInterval(()=>{
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime)/1000);
    const time = endTime - nowTime;

    // Określenie dni
    const days = Math.floor((endTime)/(1000*60*60*24) - (nowTime)/(1000*60*60*24));
    spanD.textContent = days;

    //Określenie godzin
    const hours = Math.floor((endTime / (1000*60*60) - nowTime / (1000*60*60))%24);
    spanH.textContent = hours;

    //Określenie minut
    const minutes = Math.floor((endTime / (1000*60) - nowTime / (1000*60))%60)
    spanM.textContent = minutes;

    //Określenie sekund

    const seconds = Math.floor((endTime / 1000 - nowTime / 1000)%60)
    spanS.textContent = seconds;
    // console.log(time);
},1000)

