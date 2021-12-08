const time = () => {
    let timer = 0;

    function timeInt() {
        document.body.textContent = `Upłynęło ${timer} sekund.`
        timer++;
        // console.log('działa')
    }
        return setInterval(timeInt,1000) 
}
const rozw = time;
rozw()