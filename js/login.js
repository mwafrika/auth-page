const form = document.getElementById("form");

const validateForm = (email, password) => {
  if (email !== "mwafrika@gmail.com" || password !== "123456") {
    alert("Credentials are not correct");
    return false;
  }
  return true;
};

const submitLogin = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (validateForm(email, password)) {
    window.location.href = "/welcome.html";
    form.reset();
  }
};

form.addEventListener("submit", submitLogin);
