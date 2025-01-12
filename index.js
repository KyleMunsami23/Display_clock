const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const day = document.getElementById('day');

var monthName = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Padding single digit values
    h = h < 10 ? '0' + h : h;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    // Displaying the date and time
    day.innerHTML = `${d} ${monthName[m]} ${y}`;
    hour.textContent = h;
    minutes.textContent = min;
    seconds.innerText = sec;
}, 1000);  // Update every second
