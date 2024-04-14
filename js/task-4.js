const formEl = document.querySelector(".login-form");
const formEvent = (event) => {
  event.preventDefault();
  const userEmail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;
  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const userInfo = {
      email: userEmail,
      pass: userPassword,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
};
formEl.addEventListener(`submit`, formEvent);
