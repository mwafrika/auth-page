const form = document.getElementById("form");
const submit = (e) => {
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

form.addEventListener("submit", submit);
