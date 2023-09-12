const formSignup = document.getElementById("form-signup");

const validateForm = (email, password, name) => {
  if (email.length < 3 || password.length < 3 || name.length < 6) {
    alert(
      "The minimum length of the email and password is 3, and 6 for the name."
    );
    return false;
  }
  return true;
};

const submitSignup = (e) => {
  e.preventDefault();
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;
  const name = document.getElementById("name").value;

  if (validateForm(email, password, name)) {
    window.location.href = "/index.html";
    formSignup.reset();
  }
};

formSignup.addEventListener("submit", submitSignup);
