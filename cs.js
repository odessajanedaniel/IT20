function legalAge(age) {
    if(age >= 18) {
        console.log("you are an adult");
    } else {
        console.log( "you are a minor");

    }

}

legalAge(50);

function computeGrade(grade){

    if(grade >= 95) {
        console.log("1");
    } else if (grade >=90){gi
        console.log("1.25");
    } else if (grade >=85){
        console.log("1.5");
    } else {
        console.log("Not within the transmutation");
    }

}


function login(username,password){
    if(username === "odessa") {
        
        if (password === 12345){
            console.log("Welcome User");
        } else {
            console.log("Invalid Login Credentilas");
        }    
    } else {
        console.log("Invalid User");
    }
}

login("odessa",1234);










    

   

