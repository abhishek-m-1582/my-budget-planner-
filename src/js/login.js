const defaultUserName = "admin";
const defaultPassword = "password";

const login = function () {
    const userName = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (userName === defaultUserName && password === defaultPassword) {
        window.location.href = 'string.html';
    } else {
       alert("invalid username or password")
    }   
}