var currentTimeElement = document.getElementById('current-time');
function setCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    currentTimeElement.textContent = hours+":"+minutes+":"+seconds;
}
setCurrentTime();
updateButton.addEventListener('click', setCurrentTime);