console.log("Hello Team!")

function getComputerChoice (a) {
    let result
    result = Math.random(a)
    console.log (result);

    if (result >= 2/3) {
        console.log ("Rock!")
    }
    else if (result <= 1/3) { 
        console.log ("Paper!");
    }
    else console.log ("Scissors!");
    
}

getComputerChoice()