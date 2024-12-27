setInterval(function(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var hourDeg = (hour * 30) + (minute / 2);
    var minuteDeg = minute * 6;
    var secondDeg = second * 6;

    document.querySelector('.hour-hand').style.transform = 'rotate(' + hourDeg + 'deg)';
    document.querySelector('.minute-hand').style.transform = 'rotate(' + minuteDeg + 'deg)';
    document.querySelector('.second-hand').style.transform = 'rotate(' + secondDeg + 'deg)';
}, 1000);