function timeFormat(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    function Time() {
        let time = new Date();
        let hours = timeFormat(time.getHours());
        let minutes = timeFormat(time.getMinutes());
        let seconds = timeFormat(time.getSeconds());
        let TimeInput = document.getElementById("Time");
        TimeInput.value = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(Time, 1000);