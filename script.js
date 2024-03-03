let isEmailVaild = false;
let isPasswordValid = false;
let formData = document.getElementById("formData");

function validateEmail() {
    const email = document.getElementById("mail");
    const Pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!Pattern.test(email.value)) {
      emailError.textContent = "Make sure email is more than 3 characters and has @ and a .";
      isEmailVaild = false;
    } else {
      emailError.textContent = "";
      isEmailVaild = true;
    }
}

function validatePassword() {
    const pass = document.getElementById("pass").value;

    if (pass.length < 8) {
      passError.textContent = "Make sure password is more than 8 characters.";
      isPasswordValid = false;
    } else {
      passError.textContent = "";
      isPasswordValid = true;
    }
}

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  if(isEmailVaild == true && isPasswordValid == true){
    sucess.textContent = "All good to go";
    alert("Sucessfully Logged In");
  }
});