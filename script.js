const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const bio = document.getElementById("bio");
const dob = document.getElementById("dob");
const gender = document.getElementsByName("gender");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove whitespaces
  const nameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  if (!nameValue) setErrorFor(username, "Name cannot be empty");
  else if (!nameValidate(nameValue)) {
    setErrorFor(username, "name should not contain any special characters");
  } else {
    setSuccessFor(username);
  }

  if (!phoneValue) {
    //no error for empty phone value
    setSuccessFor(phone);
  } else if (!phoneValidate(phoneValue)) {
    setErrorFor(phone, "Numerical values allowed");
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (!bio.value) {
    //leaving empty gives no error
    setSuccessFor(bio);
  } else if (!bioValidate(bio.value)) {
    // word limit 60
    setErrorFor(bio, "Not more than 60 words allowed");
  } else {
    setSuccessFor(bio);
  }

  if (dob.value === "") {
    setErrorFor(dob, "Please choose a date");
  } else {
    setSuccessFor(dob);
  }

  if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
    console.log("gender error");
    setErrorFor(gender[0], "Please select a gender");
  } else {
    console.log("gender success");
    setSuccessFor(gender[0]);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function nameValidate(name) {
  return /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(name);
}

function phoneValidate(phone) {
  return /^(0|[1-9][0-9]*)$/.test(phone);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function bioValidate(bio) {
  return /^\w+(?:\s+\w+){0,60}$/.test(bio);
}
