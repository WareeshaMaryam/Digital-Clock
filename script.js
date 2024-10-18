function result() {
    let userTime = +prompt(`Enter time in 24 hours clock format`)
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (isNaN(userTime)) {
        error.textContent = `Please enter valid time 1200 - 2400`;
    } else if (userTime == "") {
        alert(`Enter the time again`)
    } else if (userTime >= 0 && userTime < 1200) {
        message.textContent = `Good Morning`;
    } else if (userTime >= 1200 && userTime < 1700) {
        message.textContent = `Good Afternoon`;
    } else if (userTime >= 1700 && userTime < 2100) {
        message.textContent = `Good Night`;
    } else {
        error.textContent = `Invalid Time`;
    }

}
