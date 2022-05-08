
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'];
    var d = new Date();
    var mn = new Date();
    var day = days[d.getDay()];
    var month = months[mn.getMonth()];
    var date    = d.getDate();
    var year    = d.getFullYear();
    var fulldate = `${day}, ${month} ${date}, ${year}`;
    var now = new Date();
    var time = [
        now.getHours(),
        ':',
        now.getMinutes(),
        ':',
        now.getSeconds()
    ].join('');


    export {day, month, date, year, fulldate, time};