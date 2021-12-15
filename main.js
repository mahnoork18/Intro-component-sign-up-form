document.getElementById("btn").addEventListener("click", function(e){
  e.preventDefault()
});

function validateForm() {
  const first_name = document.getElementById("fname").value;
  const last_name = document.getElementById("lname").value;
  const email_add = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  


  if (first_name == "") {
    setTimeout(() => {
      document.getElementById("fname-error").style.display = "none";
    }, 3000);
    document.getElementById("fname-error").style.display = "block";
  }

if (last_name == "") {
  setTimeout(() => {
    document.getElementById("lname-error").style.display = "none";
  }, 3000);
  document.getElementById("lname-error").style.display = "block";
} 
if(email_add.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/){
  setTimeout(() => {
    document.getElementById("email-error").style.display = "none";
  }, 3000);
  document.getElementById("email-error").style.display = "block";

}

if (password == "") {
  setTimeout(() => {
    document.getElementById("pass-error").style.display = "none";
  }, 3000);
  document.getElementById("pass-error").style.display = "block";
} else{
  return true
}

}
