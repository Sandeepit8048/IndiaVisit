

// let a;
// function view(){
//     if(a==1){
//         document.getElementById("slide").style.display="inline";
//         return 1;
//     }else{
//         document.getElementById("slide").style.display="none";
//         return 0;
        
//     }
// }

// form given to condition

let password = document.getElementById("pss");
let Username = document.getElementById("Username");
console.log(Username.value);
let flag = 1;
function validatedata(event){
    event.preventDefault()
    // console.log("fdgsfgf");
    if(Username.value == ""){
        document.getElementById("userError").innerHTML="Invailed";
        flag = 0;
    
    } else if(Username.value.length < 3)  {
        document.getElementById("userError").innerHTML="Minimum value";
       flag = 0;

    }
     else{

        document.getElementById("userError").innerHTML=" ";
        flag = 1;
    }
    if(pss.value == ""){
        document.getElementById("password").innerHTML="Invailed";
        flag = 0;

    } else if(pss.value.length < 8){
        document.getElementById("password").innerHTML="min 8 character";
          flag = 0;
    }
    else{
        document.getElementById("password").innerHTML="  ";
        flag = 1;

    }
    if(flag)   { console.log({username:Username.value, password: pss.value});
    Username.value="";
    pss.value = ""; 
    number.value = "";
     email.value = "";
     date.value = "";
}   
}


// Slide change
