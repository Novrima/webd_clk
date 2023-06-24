function loop(){
    const f_time = new Date();
     let hh = f_time.getHours();
    let mm = f_time.getMinutes();
    let ss = f_time.getSeconds();

    if(hh < 10)
        hh = "0" + hh;

    if(hh < 10)
        mm = "0" + mm;

    if(hh < 10)
        ss = "0" + ss;

    document.getElementById('hour').innerHTML = hh + ":";
    document.getElementById('minute').innerHTML = mm + ":";
    document.getElementById('second').innerHTML = ss;
}

setInterval(loop, 100);