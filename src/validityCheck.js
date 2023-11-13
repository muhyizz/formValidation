export const validityCheck = () => {
  const form = document.getElementById("form");
  emailCheck(form);
  countryCheck(form);
  zipCheck(form);
  passwordCheck(form);
};

const emailCheck = (form) => {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  form.addEventListener("submit", (event) => {
    const emailSubmit = document.getElementById("emailInput");
    if (emailRegExp.test(emailSubmit.value)) {
      emailSubmit.classList.remove("invalid");
    } else {
      emailSubmit.value = "";
      emailSubmit.setAttribute(
        "placeholder",
        "Please provide a valid email address"
      );
      emailSubmit.classList.add("invalid");
    }

    if (emailSubmit.value.length === 0) {
      emailSubmit.value = "";
      emailSubmit.setAttribute(
        "placeholder",
        "Please provide an email address"
      );
      emailSubmit.classList.add("invalid");
    } else {
      emailSubmit.classList.remove("invalid");
    }
    event.preventDefault();
  });
};

const countryCheck = (form) => {
  form.addEventListener("submit", (event) => {
    const countrySubmit = document.getElementById("countryInput");

    if (countrySubmit.value.length === 0) {
      countrySubmit.value = "";
      countrySubmit.setAttribute("placeholder", "Please provide a country");
      countrySubmit.classList.add("invalid");
    } else {
      countrySubmit.classList.remove("invalid");
    }
    event.preventDefault();
  });
};

const zipCheck = (form) => {
  form.addEventListener("submit", (event) => {
    const zipSubmit = document.getElementById("zipInput");

    if (zipSubmit.value.length === 0) {
      zipSubmit.value = "";
      zipSubmit.setAttribute("placeholder", "Please provide a ZIP Code");
      zipSubmit.classList.add("invalid");
    }
    event.preventDefault();
  });
};

const passwordCheck = (form) => {
  form.addEventListener("submit", (event) => {
    const passwordSubmit = document.getElementById("passwordInput");
    const passwordConfirmSubmit = document.getElementById(
      "passwordConfirmationInput"
    );

    if (!(passwordSubmit.value === passwordConfirmSubmit.value)) {
      passwordConfirmSubmit.value = "";
      passwordConfirmSubmit.setAttribute(
        "placeholder",
        "Password does'nt match"
      );
      passwordConfirmSubmit.classList.add("invalid");
    }

    if (passwordSubmit.value.length === 0) {
      passwordSubmit.value = "";
      passwordSubmit.setAttribute("placeholder", "Please provide a Password");
      passwordSubmit.classList.add("invalid");
    }

    if (passwordConfirmSubmit.value.length === 0) {
      passwordConfirmSubmit.value = "";
      passwordConfirmSubmit.setAttribute(
        "placeholder",
        "Please provide a Password"
      );
      passwordConfirmSubmit.classList.add("invalid");
    }
    event.preventDefault();
  });
};
