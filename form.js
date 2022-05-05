const linebreak = document.createElement("BR");
const linebreak2 = document.createElement("BR");
const h1 = document.createElement("h1");
const h1child = document.createTextNode("Login form");
h1.appendChild(h1child);

const form = document.createElement("form");

const email = document.createElement('input');
email.setAttribute("type", "email");

const password = document.createElement('input');
password.setAttribute("type","password");

const submit = document.createElement('input');
submit.setAttribute("type","submit");

form.appendChild(email);

form.appendChild(linebreak);

form.appendChild(password);

form.appendChild(linebreak2);

form.appendChild(submit);

const element = document.getElementById("root");
element.appendChild(h1);
element.appendChild(form);

