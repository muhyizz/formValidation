import { validityCheck } from "./validityCheck";

const mainContent = document.getElementById("maincontent");
export const loadPage = () => {
  loadHeader();
  loadForm();
  validityCheck();
  loadFooter();
};

// create header main body and footer
// inside main body include Email, Country,
// Zip Code, Password and Password Confirmation fields
// Create CSS for invalid statement
// Create logic Js for validation

const loadHeader = () => {
  const header = document.createElement("header");
  header.setAttribute("id", "header");
  header.classList.add("header");
  header.innerHTML = "Form Validation";
  mainContent.appendChild(header);
};

const loadForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.classList.add("form");
  form.setAttribute("novalidate", "true");
  mainContent.appendChild(form);
  loadFormContent();
};

const loadFooter = () => {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  footer.innerText = "Muhyizz @Github";
  mainContent.appendChild(footer);
};

const loadFormContent = () => {
  const form = document.getElementById("form");

  const emailLabel = document.createElement("label");
  emailLabel.innerText = "Email Address: ";
  emailLabel.classList.add("label");
  emailLabel.setAttribute("for", "emailInput");
  const emailInput = document.createElement("input");
  emailInput.classList.add("input");
  emailInput.setAttribute("id", "emailInput");
  emailInput.placeholder = "email@portal.com";

  form.appendChild(emailLabel);
  form.appendChild(emailInput);

  const countryLabel = document.createElement("label");
  countryLabel.innerText = "Country: ";
  countryLabel.classList.add("label");
  countryLabel.setAttribute("for", "countryInput");
  const countryInput = document.createElement("input");
  countryInput.classList.add("input");
  countryInput.setAttribute("id", "countryInput");
  countryInput.placeholder = "country";

  form.appendChild(countryLabel);
  form.appendChild(countryInput);

  const zipLabel = document.createElement("label");
  zipLabel.innerText = "Zip Code: ";
  zipLabel.classList.add("label");
  zipLabel.setAttribute("for", "zipInput");
  const zipInput = document.createElement("input");
  zipInput.classList.add("input");
  zipInput.setAttribute("id", "zipInput");
  zipInput.placeholder = "Zip Code";

  form.appendChild(zipLabel);
  form.appendChild(zipInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.innerText = "Password: ";
  passwordLabel.classList.add("label");
  passwordLabel.setAttribute("for", "passwordInput");
  const passwordInput = document.createElement("input");
  passwordInput.classList.add("input");
  passwordInput.setAttribute("id", "passwordInput");
  passwordInput.setAttribute("type", "password");
  passwordInput.placeholder = "Password";

  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);

  const passwordConfirmLabel = document.createElement("label");
  passwordConfirmLabel.innerText = "Password Confirmation: ";
  passwordConfirmLabel.classList.add("label");
  passwordConfirmLabel.setAttribute("for", "passwordConfirmationInput");
  const passwordConfirmInput = document.createElement("input");
  passwordConfirmInput.classList.add("input");
  passwordConfirmInput.setAttribute("id", "passwordConfirmationInput");
  passwordConfirmInput.setAttribute("type", "password");
  passwordConfirmInput.placeholder = "Password Confirmation";

  form.appendChild(passwordConfirmLabel);
  form.appendChild(passwordConfirmInput);

  const buttonDiv = document.createElement("div");
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.setAttribute("id", "submitButton");
  submitButton.setAttribute("type", "submit");
  buttonDiv.appendChild(submitButton);

  form.appendChild(buttonDiv);
};
