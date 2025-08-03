console.log("Hello Team!")

function getComputerChoice (a) {
    let result
    result = Math.random(a)
    console.log (result);
    if (result >= 1/2) {
        console.log ("larger!")
    }
    else console.log ("smaller!");
    
}

getComputerChoice()