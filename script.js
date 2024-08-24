 const signInBtnLink = document.querySelector('.signInBtnLink');
 const signUpBtnLink = document.querySelector('.signUpBtnLink');
 const wrapper = document.querySelector('.wrapper');

 signUpBtnLink.addEventListener('.click', () => {
    wrapper.classList.toggle('active');
 });


 signInBtnLink.addEventListener('.click', () => {
   wrapper.classList.toggle('active');
});