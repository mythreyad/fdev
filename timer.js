let year = 2023;
let month = 11;
let day = 25;

//Christmas
let christmas = new Date(year, month, day);

function update() {

    //we need the date first
    let date = new Date();

    //if its christmas
    if (date.getMonth() == 11 && date.getDate() == 25) {
        output = "It's Christmas!"
        document.getElementById("timer").innerHTML = output;
    }
    else {

        if (Date.parse(christmas) < Date.parse(date)) {
            //update year to next
            year += 1;
        }
    
        console.log(christmas.getFullYear());
    
        let time = christmas - date;
        const dayDivide = 1000 * 60 * 60 * 24;
        const daysLeft = Math.floor(time/dayDivide);
        time = time - (daysLeft * dayDivide);
        const hourDivide = 1000 * 60 * 60;
        const hoursLeft = Math.floor(time/hourDivide);
        time = time - (hoursLeft * hourDivide);
        const minutesDivide = 1000 * 60;
        const minutesLeft = Math.floor(time/minutesDivide);
        const secondsDivide = 1000;
        time = time - (minutesLeft * minutesDivide);
        const secondsLeft = Math.floor(time/secondsDivide);
    
        let output = daysLeft + (daysLeft == 1? " Day": " Days");
        output += " " + hoursLeft + (hoursLeft == 1? " Hour": " Hours")
        output += " " + minutesLeft + (minutesLeft == 1? " Minute": " Minutes");
        output += " and " + secondsLeft + (secondsLeft == 1? " Second": " Seconds");
        output += " till Christmas!";
    
        document.getElementById("timer").innerHTML = output;

    }
}

update(); //start and then update
setInterval(update, 2000); //update every 2 seconds