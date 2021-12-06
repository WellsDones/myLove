'use strict';

const btnLogin = document.getElementsByClassName('btnLogin')[0];
const loginSection = document.getElementsByClassName('loginSection')[0];
const mainSection = document.getElementsByClassName('mainSection')[0];
const loginInput = document.getElementsByClassName('login')[0];
const passwordInput = document.getElementsByClassName('password')[0];

const login = () => {
  if (loginInput.value === 'mylove' && passwordInput.value === 'loveyou') {
    loginSection.style.display = "none";
    mainSection.style.display = "block";
  } else {
    passwordInput.value === "не верно";
  }
};

btnLogin.addEventListener('click', login);