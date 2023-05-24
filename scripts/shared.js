let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal-action-negative')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', function() {
        //modal.style.display = 'Block'
        //backdrop.style.display = 'block'
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

backdrop.addEventListener('click' , closeModal )
modalCloseBtn.addEventListener('click' , closeModal)

function closeModal() {
    //backdrop.style.display = "none"
    //modal.style.display = "none"
    modal.classList.remove('open')
    backdrop.classList.remove('open')
}
