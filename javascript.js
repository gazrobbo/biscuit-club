const biscuiteer = ["Nick", "Paul", "Gary", "Dave"]
const resultsBox = document.getElementsByClassName("results-box");

// gets the week Number

function ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
}

dt = new Date();

let weekNumber = (ISO8601_week_no(dt));

// changes the week number to a decimal

let x = (weekNumber / 4);
let y = Math.floor(x);
let z = (x - y);

// changes the week number to 1 - 4

// let biscuiteerNumber = function() {
//     if (z == 0) {
//         return 0;
//     } else if (z == 0.25) {
//         return 1;
//     } else if (z == 0.5) {
//         return 2;
//     } else {
//         return 3;
//     }    
// };

// adds 1 to the above number and changes 5 to 1

// let nextBiscuiteerNumber = function(){
//     x = (biscuiteerNumber(z) + 1);
//     if (x == 4) {
//          return 0;
//     }
//     else {
//         return x;
//     }
// };




// changes the week number to 1 - 4

let biscuiteerNumber = () => {
    if (z == 0) {
        return 0;
    } else if (z == 0.25) {
        return 1;
    } else if (z == 0.5) {
        return 2;
    } else {
        return 3;
    }    
};

// adds 1 to the above number and changes 5 to 1

let nextBiscuiteerNumber = () => {
    x = (biscuiteerNumber(z) + 1);
    if (x == 4) {
         return 0;
    }
    else {
        return x;
    }
};


// retreives button and text fields

const button = document.getElementById("getBiscuiteer");
const thisWeek = document.getElementById("thisWeek");
const nextWeek = document.getElementById("nextWeek");

// places results in text fields

button.onclick = () => {
    let thisWeekName = (biscuiteer[biscuiteerNumber()]);
thisWeek.innerHTML=(thisWeekName);
    let nextWeekName = (biscuiteer[nextBiscuiteerNumber()]);
nextWeek.innerHTML=(nextWeekName);

resultsBox[0].classList.add("opacity");
resultsBox[1].classList.add("opacity");
};

