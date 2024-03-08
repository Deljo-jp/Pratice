let rating = 4;

if(rating == 5){
    console.log('5 stars');
}
else if(rating == 4){
    console.log('4 star');
}

else if(rating == 3){
    console.log('3 stars')
}

else if(rating == 2){
    console.log('2 star');
}

else if (rating == 1){
    console.log('1 starr');
}

else{
    }console.log('invalid')

    // SWith case

let user = 'admin';

switch(user){
    case "admin":
        console.log('redirect him to admin page');
        break;
    case 'mentor':
        console.log('Redirect him to mentor page');
        break;
    default:
        console.log('I am visitor')

}

// Ternary operator

let userlogin = false;
userlogin ? console.log('login') : console.log('logout');


