const formSignup = document.getElementById("form-signup");

const validateForm = (email, password, name) => {
  if (email.length < 3 || password.length < 3 || name.length < 6) {
    Toastify({
      text: "The minimum length of the email and password is 3, and 6 for the name.",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #ff0000, #ff5733)",
      },
    }).showToast();
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
