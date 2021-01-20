// select dom elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const username = document.getElementById('username');
const focus = document.getElementById('focus');

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

//change background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/e0/b5/25/e0b52550c66af4de1a835dd5f2de39cc.jpg')";
        greeting.textContent = 'Good Morning';
    }else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('https://alliswall.com/file/2175/1920x1200/16:9/valley-at-afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else {
        //evening
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2077533.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

//get name
function getName() {
    if(localStorage.getItem('username') === null) {
        username.textContent = '[Enter Name]';
    } else {
        username.textContent = localStorage.getItem('username');
    }
}
//set name
function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('username', e.target.innerText);
            username.blur();
        }
    } else {
        localStorage.setItem('username', e.target.innerText);
    }
}

//get focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

username.addEventListener('keypress', setName);
username.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
