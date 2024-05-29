const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorMessage = document.querySelector("em");
const lastNameError = document.querySelector(".lastName_error");
const emailError = document.querySelector(".email_error");
const passwordError = document.querySelector(".password_error");
const firstImage = document.querySelector(".fristname_image");
const lastImage = document.querySelector(".lastName_image");
const emailImage = document.querySelector(".email_image");
const passwordImage = document.querySelector(".password_image");


console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorMessage.innerHTML = " Frist Name cannot be empty";
    errorMessage.classList.add("em");
    firstImage.classList.remove("hide");
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastNameError.innerHTML = "Last Name cannot be empty"
    errorMessage.classList.add("em");
    lastImage.classList.remove("hide");
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.innerHTML ="email cannot be empty"
    errorMessage.classList.add("em");
    emailImage.classList.remove("hide");
    
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.innerHTML = "password cannot be empty"
    errorMessage.classList.add("em");
    passwordImage.classList.remove("hide");
  } else {
    password.classList.remove('error');
  }
});


const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".eye-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});



//Validate email
//regex
//validator
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}






























