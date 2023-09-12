const form = document.getElementById("form");
const formSignup = document.getElementById("form-signup");

const submitLogin = (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value !== "mwafrika@gmail.com" || password.value !== "123") {
    alert("Credentials are not correct");
    return false;
  } else {
    window.location.href = "/index.html";
    form.reset();
  }
};

const submitSignup = (e) => {
  e.preventDefault();
  const email = document.getElementById("email-signup");
  const password = document.getElementById("password-signup");
  const name = document.getElementById("name");

  if (
    email.value.length < 3 ||
    password.value.length < 3 ||
    name.value.length < 6
  ) {
    alert("The minimum length of the email and password is 3 and 6 for name");
    return false;
  } else {
    // direct to login page
    window.location.href = "/login.html";
    formSignup.reset();
  }
};

form.addEventListener("submit", submitLogin);
formSignup.addEventListener("submit", submitSignup);
