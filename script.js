
const navBar = document.querySelector('nav');
document.addEventListener('scroll', e => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navBar.style.display = "none";
    }else {
        navBar.style.display = "initial";
    }
});

const URL = "https://api.github.com/users/GidgetPINK"

const gitCardContainer = document.querySelector(".cards");
axios.get(URL)
.then(res => {
    const data = res.data;
    gitCardContainer.appendChild(gitCardMaker(data));
})


const entryPoint = document.querySelector('div.cards')
const gitCardMaker = ({ avatar_url, name, login, location, html_url, followers, following, bio }) => {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add("card");
  entryPoint.appendChild(cardContainer);

  const cardImg = document.createElement('img');
  cardImg.src = avatar_url;
  document.querySelector(".card").appendChild(cardImg);

  const cardDetails = document.createElement('div');
  cardDetails.classList.add("card-info");
  document.querySelector(".card").appendChild(cardDetails);

  const heading = document.createElement('h3');
  heading.classList.add("name");
  heading.innerHTML = `${name}`;
  document.querySelector(".card-info").appendChild(heading);
  

  const para = document.createElement('p');
  para.classList.add("username");
  para.innerHTML = `${login}`;
  document.querySelector(".card-info").appendChild(para);

  const para1 = document.createElement('p');
  para1.innerHTML = `Location: ${location}`;
  document.querySelector(".card-info").appendChild(para1);

  const para2 = document.createElement('p');
  para2.innerHTML = "Profile";
  document.querySelector(".card-info").appendChild(para2);

  const profileLink = document.createElement('a');
  document.querySelector(".card-info").appendChild(profileLink);
  profileLink.textContent = `${html_url}`;

  const para3 = document.createElement('p');
  para3.innerHTML = `Followers: ${followers}`;
  document.querySelector(".card-info").appendChild(para3);

  const para4 = document.createElement('p');
  para4.innerHTML = `Following: ${following}`;
  document.querySelector(".card-info").appendChild(para4);

  const para5 = document.createElement('p');
  para5.innerHTML = `Bio: ${bio}`;
  document.querySelector(".card-info").appendChild(para5);

  
  return cardContainer;
}
