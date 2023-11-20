// IF Else
// Switch case
// Ternary operations/Conditions


//Rating Mini app (With IF ELse)

let rating = 5;
if (rating == 5) {
    console.log('5 Stars');
} else if(rating == 4) {
    console.log('4 stars');
} else if (rating == 3) {
    console.log('3 Stars');
} else if (rating == 2) {
    console.log('2 stars');
} else if (rating == 1) {
    console.log('1 star');
} else {
    console.log('I am Else')
}

// Switch Case

let user = 'admin'

switch(user){
    case'admin':
         console.log('redierct to admin page');
        break;
    case'Mentor':
        console.log('Redirect him to mentor page');
        break;
    default:
        console.log('Normal user page')
}

//Ternary Operator (Condition ? True : False)
let raining = true;
raining ? console.log('It is raining') : console.log('Not raining');



