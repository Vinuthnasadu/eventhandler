let emailinput = document.getElementById('mail');
let passwordinput = document.getElementById('pwd');
let button = document.getElementById('btn');
let message1Div = document.getElementById('message1');
let message2Div = document.getElementById('message2');
passwordinput.addEventListener('keypress' , onChange)
emailinput.addEventListener('keypress' , onChange)


function onChange()
{
    let email = emailinput.value;
    let password = passwordinput.value
    if(email.includes("@") && email.includes(".") && email.length >= 3)
    {
        if(password != "" && password.length >= 8)
         {
            console.log("valid")
            message1Div.innerText = "";
            message2Div.innerText = "All good to go!";
            message2Div.style.color = "green";
            button.removeAttribute("disabled");
         }
       else
       {
        console.log("not valid")
        message1Div.innerText = "Make sure mail is more than 3 characters and has @ and a .";
        message1Div.style.color = "red";
        message2Div.innerText = "Make sure password is more than 8 characters";
        message2Div.style.color = "red";
        button.setAttribute("disabled");
       }
    }
    else
    {
        console.log("not valid")
        message1Div.innerText = "Make sure mail is more than 3 characters and has @ and a .";
        message1Div.style.color = "red";
        message2Div.innerText = "Make sure password is more than 8 characters";
        message2Div.style.color = "red";
        button.setAttribute("disabled");
    }
}

    
function myFunction() {
    let text = "Confirm submission by clicking ok!";
    if (confirm(text) == true) {
      alert("successful signup!")
    } else {
      text = "";
    }
}
button.onclick=myFunction;