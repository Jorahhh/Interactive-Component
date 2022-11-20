const submBtn = document.getElementById('submit');
const ratings = document.querySelectorAll('.circle-button');
const container = document.querySelector('.container');
const hiddenContainer = document.querySelector('.hidden-container');
const answer = document.getElementById('answer');


const EventRatingsBtn = (e) => {
    e.target.classList.add('active');
    let myValue = e.target.textContent;
    if(e.target.classList.contains('active')){ 
        answer.textContent = myValue;
        submBtn.addEventListener('click', () => {      //when the event contains 'active' class, you can use submit button.
            container.style.display = 'none';
            hiddenContainer.style.display = 'block';
            console.log('it works!')
        });
    }
}

ratings.forEach(btn => {
    btn.addEventListener('click', EventRatingsBtn);
});


