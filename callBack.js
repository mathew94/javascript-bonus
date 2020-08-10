function wellComeGuest(name, greetHandler){
    greetHandler(name);
}
const actorName = 'Tom Hanks';

function greetMorning(name){
    console.log('Good Morning', name);
}

function greetAfternoon(name){
    console.log('Good Afternoon', name);
}


function greetEvening(name){
    console.log('Good Evening', name);
}
wellComeGuest(actorName, greetMorning);
wellComeGuest('Kenue Reevs', greetAfternoon);
wellComeGuest('Jason Steham', greetEvening);