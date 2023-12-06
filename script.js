//let's get all required elements
const form = document.querySelector("form"),
statusTxt = form.querySelector(".form-group span");
form.onsubmit = (e)=>{
e.preventDefault();
statusTxt.style.color = "#0D6EFD"; //preventing form from submitting 
statusTxt.style.display="block";
statusTxt.style.marginBottom="30px";
let xhr = new XMLHttpRequest(); //creating new xml object
xhr.open("POST", "mail.php", true); //sending post request to message.php file 
xhr.onload = ()=>{ //once ajax loaded
if(xhr.readyState == 4 && xhr.status == 200){//if ajax response status is 200 & ready status is 4 
    let response = xhr.response; //storing ajax response in a response variable 
    if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!")){
        statusTxt.style.color = "red";
    } else{
        form.reset();
        setTimeout(()=>{
            statusTxt.style.display = "none";
        }, 3000);
    }
    statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); //creating new FormData obj. This obj is used to send form data 
    xhr.send(formData); //seding form data
}