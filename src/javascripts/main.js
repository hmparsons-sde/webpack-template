// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/authentication';

import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
  console.log('YOU ARE UP AND RUNNING!');
  
  // USE WITH FIREBASE AUTH
  // checkLoginStatus();
};

init();
