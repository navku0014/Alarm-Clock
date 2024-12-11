
let btnAlarm = document.getElementById('btnAlarm');

btnAlarm.addEventListener('click',setAlarm);

var audio = new Audio('https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/aud-20220817-wa0007-57736.mp3');

function ringbell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    
    let time = document.getElementById('alarmTime');
    alarmDate = new Date(time.value);
    console.log(alarmDate);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm >= 0){
        setTimeout(()=>{
            console.log('Ringing...');    
            ringbell();
        },timeToAlarm);
    }
}