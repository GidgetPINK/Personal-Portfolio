import axios from 'axios';

const navBar = document.querySelector('nav');
document.addEventListener('scroll', e => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navBar.style.display = "none";
    }else {
        navBar.style.display = "initial";
    }
});

const URL = "https://api.github.com/users/GidgetPINK"

axios.get(URL)
.then(res => {
    const data = res.data;
    console.log(data)
})