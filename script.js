import axios from 'axios';

const navBar = document.querySelector('nav');
document.addEventListener('scroll', e => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navBar.style.display = "none";
    }else {
        navBar.style.display = "initial";
    }
});

const URL = get("https://api.github.com/users/GidgetPINK")
console.log(URL);
