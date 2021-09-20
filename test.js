const signinBtn = document.querySelector('.signinBtn'),
      signupBtn = document.querySelector('.signupBtn'),
      formBx = document.querySelector('.formBx'),
      body = document.querySelector('body');

signupBtn.onclick = function(){
  formBx.classList.add('active');
  body.classList.add('active');
}
signinBtn.onclick = function(){
  formBx.classList.remove('active');
  body.classList.remove('active');
}